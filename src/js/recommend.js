import recommendCss from '../css/recommend.scss'

{
    let view = {
        el: '.pylst',
        render(data){
            data.forEach((e, i)=>{
                let $li = $(`
				<li class="hot-music-li">
					<a id="hot-music-item" href="./song.html?id=${e.id}">
						<div class="rank">${i+1}</div>
						<div class="hot-music-info">
							<h3>${e.name}</h3>
						    <p>${e.singer}</p>
					        <svg class="icon play-circled" aria-hidden="true">
			                  <use xlink:href="#icon-play-circle-big"></use>
				            </svg>
						</div>
			        </a>
		        </li>
			`)
                $('#songList').append($li)
            })
            let $blankLi = $('<li class="blankLi"></li>')
            $('#songList').append($blankLi)
        }
    }
    let model = {
        data: {
            songs:[]
        },
        find(){
            let query = new AV.Query('Song')
            return query.find().then((songs)=>{
                //songs是所有歌曲，是一个数组，下面从数组每一项的对象中获取歌曲数据
                songs.map((song)=>{
                    let songData = {
                        id: song.id,
                        name: song.attributes.name,
                        singer: song.attributes.singer,
                        url: song.attributes.url
                    }
                    this.data.songs.push(songData)
                })
                return songs
            })
        },
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.model.find().then(()=>{
                console.log(this.model.data.songs);
                let {songs} = this.model.data
                this.view.render(songs)
            })
        }
    }
    controller.init(view, model)
}