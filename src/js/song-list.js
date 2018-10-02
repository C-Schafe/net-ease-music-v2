console.log('song list');

{
    let view = {
        el: '.songList-container',
        template: `
            <h3>歌曲列表</h3>
            <ul class="song-list"></ul>
        `,
        render(data){
            let {songs} = data
            $(this.el).html(this.template)
            songs.map((song)=>{
                $(this.el).find('.song-list').append(`
                    <li class="active">
                        <a href="#">
                            <svg class="icon play" aria-hidden="true">
                                <use xlink:href="#icon-play2"></use>
                            </svg>
                        </a>
                        <div class="song">
                            <div class="li-song-info">
                                <svg class="icon name" aria-hidden="true">
                                    <use xlink:href="#icon-name"></use>
                                </svg>
                                <span class="song-name">${song.name}</span>
                                <svg class="icon singer" aria-hidden="true">
                                    <use xlink:href="#icon-singer"></use>
                                </svg>
                                <span class="song-singer">${song.singer}</span>
                            </div>
                            <div class="li-song-actions">
                                <svg class="icon edit" aria-hidden="true">
                                    <use xlink:href="#icon-edit"></use>
                                </svg>
                                <svg class="icon delete" aria-hidden="true">
                                    <use xlink:href="#icon-delete"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                `)
            })
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
            })
        }
    }
    let controller = {
        init(view,model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            window.eventHub.on('save', (data)=>{
                this.model.data.songs.push(data)
                this.view.render(this.model.data)
            })
            this.model.find().then(()=>{
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}
