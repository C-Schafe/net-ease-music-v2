{
    let view = {
        el: '.tab2',
        template: `
            <p class="loading">
                <img src="${require('../assets/loading.gif')}" alt="loading">
            </p>
            <div class="board">
                <div class="hot-music-icon"></div>
                <div class="hot-music-date"></div>
            </div>
            <ol id="tab2List">

            </ol>
        `,
        render(data){
            console.log('tab hot list render执行');
            $(this.el).html(this.template)
            this.getDate()
        },
        show(){
            $(this.el).addClass('active')
        },
        hide(){
            $(this.el).removeClass('active')
        },
        getDate(){
            console.log('getdate执行');
            let today = new Date()
            let day = today.getDate()
            let month = today.getMonth() + 1
            console.log($(this.el));
            $(this.el).find('.hot-music-date').text(`更新日期：${this.pad(month)}月${day}日`)
        },
        pad(number){
            return number >= 10 ? number + '' : '0' + number
        }
    }
    let model = {
        data: {
            tabName: 'tab2',
            songs:[],
            selectedId: undefined
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
            this.view.render(model.data)
            this.bindEventHub()
            this.model.find().then(()=>{
                console.log(this.model.data.songs);
                let songs = this.model.data.songs
                songs.forEach((e, i)=>{
                    let $li = $(`
							<li class="hot-music-li">
								<a id="hot-music-item" href="./song.html?id=${e.id}">
									<div class="rank">${this.pad(i+1)}</div>
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
                    $('#tab2List').append($li)
                })
            }).then(()=>{
                $(this.view.el).find('.loading').remove()
            })
        },
        bindEventHub(){
            window.eventHub.on('selectTab', (data)=>{
                console.log(data);
                if(this.model.data.tabName === data){
                    this.view.show()
                }else{
                    this.view.hide()
                }
            })
        },
        pad(number){
            return number >= 10 ? number + '' : '0' + number
        }
    }
    controller.init(view, model)
}