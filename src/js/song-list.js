console.log('song list');

{
    let view = {
        el: '.songList-container',
        template: `
            <h3>歌曲列表</h3>
            <ul class="song-list"></ul>
        `,
        render(data){
            console.log('song list的render执行');
            console.log(data);
            let {songs} = data
            $(this.el).html(this.template)
            songs.map((song)=>{
                $(this.el).find('.song-list').append(`<li>${song.name}</li>`)
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
        init(view,data){
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
