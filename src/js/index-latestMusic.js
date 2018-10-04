{
    let view = {
        el: '.latestMusic',
        template: `
            <h2 class="title">最新音乐</h2>
            <p class="loading">
                <img src="${require('../assets/loading.gif')}" alt="loading">
            </p>
            <ol id="latestSongs">
            </ol>
        `,
        render(data){
            $(this.el).html(this.template)
            let {songs} = data
            songs.map(song=>{
                let $li = $(`
                    <li>
                        <a href="./song.html?id=${song.id}">
                            <h3>${song.name}</h3>
                            <p>${song.singer}</p>
                            <a href="#">
                                <svg class="icon play-circled" aria-hidden="true">
                                  <use xlink:href="#icon-play-circle-big"></use>
                                </svg>
                            </a>
                        </a>
                    </li>
                `)
                $(this.el).find('ol').append($li)
            })
        }
    }
    let model = {
        data: {
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
            this.model.find().then(()=>{
                console.log(this.model.data);
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}
