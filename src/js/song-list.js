console.log('song list');

{
    let view = {
        el: '.songList-container',
        template: `
            <h3>歌曲列表</h3>
            <ul class="song-list"></ul>
        `,
        render(data){
            $(this.el).empty()
            let {songs, selectedId} = data
            $(this.el).html(this.template)
            let liList = songs.map((song)=>{
                let $li = $(`
                    <li song-data-id="${song.id}">
                        <a href="${song.url}" target="_blank">
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
                                <svg id="edit" class="icon edit" aria-hidden="true">
                                    <use xlink:href="#icon-edit"></use>
                                </svg>
                                <svg id="delete" class="icon delete" aria-hidden="true">
                                    <use xlink:href="#icon-delete"></use>
                                </svg>
                            </div>
                        </div>
                    </li>
                `)
                if(song.id === selectedId){
                    $li.addClass('active')
                }
                return $li
            })
            liList.map((domLi)=>{
                $(this.el).find('.song-list').append(domLi)
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
            })
        },
        delete(data){
            let song = AV.Object.createWithoutData('Song', data);
            return song.destroy().then((success)=>{
                // 删除成功
                console.log('删除成功');
            }, (error)=>{
                // 删除失败
            });
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
                this.bindEvents()
                this.bindEventHub()
            })
        },
        bindEvents(){
            $(this.view.el).on('click', '.edit', (e)=>{
                let liId = $(e.currentTarget).parents('li').attr('song-data-id')
                this.model.data.selectedId = liId
                this.view.render(this.model.data)
                let data
                let {songs} = this.model.data
                songs.map((song)=>{
                    if(song.id === this.model.data.selectedId){
                        data = song
                    }
                })
                window.eventHub.emit('select', JSON.parse(JSON.stringify(data)))
            })
            $(this.view.el).on('click', '.delete', (e)=>{

                alertify.confirm("警告!","确认删除此歌曲？",
                        ()=>{
                            alertify.success('成功删除');
                            let liId = $(e.currentTarget).parents('li').attr('song-data-id')
                            console.log(this.model.data);
                            this.model.delete(liId).then((res)=>{
                                console.log(res);
                                this.model.data = {songs:[], selectedId: undefined}
                                this.init(view,model)
                            })
                        },
                        ()=>{
                            alertify.error('取消');
                        }).set('labels', {ok:'删除', cancel:'取消'}); ;
            })
        },
        bindEventHub(){
            window.eventHub.on('new', ()=>{
                this.model.data.selectedId = undefined
                this.view.render(this.model.data)
            })
            window.eventHub.on('update', (data)=>{
                console.log(this.model.data);
                let {songs} = this.model.data
                let newSongs = songs.map((song)=>{
                    if(song.id === data.id){
                        song = data
                    }
                    return song
                })
                this.model.data.songs = newSongs
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}
