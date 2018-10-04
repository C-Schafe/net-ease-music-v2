console.log('song form');
{
    let view = {
        el: '.new-song-detail',
        template: `
                <form class="form">
                    <div class="song-info">
                        <div class="picture">
                            <img src="" alt="">
                        </div>
                        <div class="left-rows">
                            <div class="row">
                                <label>
                                    歌名
                                </label>
                                <input type="text" name="name" value="__name__">
                            </div>
                            <div class="row">
                                <label>
                                    歌手
                                </label>
                                <input type="text" name="singer" value="__singer__">
                            </div>
                            <div class="row">
                                <label>
                                    外链
                                </label>
                                <input type="text" name="url" value="__url__">
                            </div>
                            <div class="row">
                                <label>
                                    封面
                                </label>
                                <input type="text" name="cover" value="__cover__">
                            </div>
                        </div>
                        <div class="right-row">
                            <div class="row">
                                <label>
                                    歌词
                                </label>
                                <textarea name="lyrics" id="song-lyrics">__lyrics__</textarea>
                                <!--<input type="text" name="lyrics" value="__lyrics__">-->
                            </div>
                        </div>
                    </div>
                    <div class="row actions">
                        <button type="submit">保存</button>
                    </div>
                </form>
        `,
        render(data = {}){
            let placeholders = ['name','singer','lyrics','url','cover']
            let htmlString = this.template
            placeholders.map((string)=>{
                htmlString = htmlString.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(htmlString)
            this.toggleNewAndEdit(data.id)
        },
        reset(){
            this.render({})
        },
        show(){
            $(this.el).removeClass('hide')
        },
        hide(){
            $(this.el).addClass('hide')
        },
        toggleNewAndEdit(data){
            if(data){
                $(this.el).find('.form').prepend('<h3>编辑歌曲</h3>')
            }else{
                $(this.el).find('.form').prepend('<h3>新建歌曲</h3>')
            }
        }
    }
    let model = {
        data: { name:'',singer:'',url:'',id:'',lyrics:'',cover:''},
        create(data){
            console.log('创建数据');
            // 声明类型
            let Song = AV.Object.extend('Song');
            // 新建对象
            let song = new Song();
            // 设置名称
            song.set('name', data.name);
            // 设置优先级
            song.set('singer',data.singer);
            song.set('url',data.url);
            song.set('cover',data.cover);
            song.set('lyrics',data.lyrics);
            return song.save().then((res)=>{
                console.log(res);
                let {id, attributes} = res
                console.log(id,attributes)
                Object.assign(this.data, {
                    id,
                    name: attributes.name,
                    singer: attributes.singer,
                    url: attributes.url,
                    cover: attributes.cover,
                    lyrics: attributes.lyrics
                })
            }, (error)=>{
                console.error(error);
            });
        },
        update(data){
            console.log('更新数据');
            // 第一个参数是 className，第二个参数是 objectId
            var song = AV.Object.createWithoutData('Song', this.data.id);
            // 修改属性
            song.set('name', data.name);
            song.set('singer', data.singer);
            song.set('url', data.url);
            song.set('cover',data.cover);
            song.set('lyrics',data.lyrics);
            // 保存到云端
            return song.save();
        }
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            this.bindEvents()
            this.bindEventHub()
            window.eventHub.on('upload', (data)=>{
                //song-form接收到上传歌曲的信息并重新渲染form内容
                this.reset(data)
            })
        },
        reset(data){
            this.view.render(data)
        },
        bindEvents(){
            console.log($(this.view.el));
            $(this.view.el).on('submit', 'form', (e)=>{
                //点击保存后收集form中的数据
                e.preventDefault()
                let needs = 'name singer url cover lyrics'.split(' ')
                let data = {}
                needs.map((item)=>{
                    data[item] = $(this.view.el).find(`[name=${item}]`).val()
                })
                //收集数据后，判断是更新还是新建数据
                if(this.model.data.id){
                    this.model.update(data).then((res)=>{
                        console.log('更新成功');
                        console.log(res);
                        Object.assign(data, {
                            id: res.id,
                            name: res.attributes.name,
                            singer: res.attributes.singer,
                            url: res.attributes.url,
                            cover: res.attributes.cover,
                            lyrics: res.attributes.lyrics
                        })
                        window.eventHub.emit('update', JSON.parse(JSON.stringify(data)))
                        this.model.data = { name:'',singer:'',url:'',id:'',lyrics:'',cover:''}
                        this.view.hide()
                    })
                }else {
                    this.model.create(data).then(()=>{
                        this.view.reset()
                        let newSong = JSON.parse(JSON.stringify(this.model.data))
                        console.log(newSong);
                        window.eventHub.emit('save', newSong)
                        this.model.data = { name:'',singer:'',url:'',id:'',lyrics:'',cover:''}
                    })
                }
            })
        },
        bindEventHub(){
            window.eventHub.on('new', ()=>{
                this.view.hide()
            })
            window.eventHub.on('upload', ()=>{
                this.view.show()
            })
            window.eventHub.on('select', (data)=>{
                console.log('song-form接收到select事件');
                Object.assign(this.model.data, data)
                this.view.show()
                this.view.render(this.model.data)
                console.log(this.model.data);
            })
            window.eventHub.on('save', ()=>{
                this.view.hide()
            })
        }
    }
    controller.init(view, model)
}