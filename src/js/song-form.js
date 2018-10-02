console.log('song form');
{
    let view = {
        el: '.new-song-detail',
        template: `
            <form class="form">
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
                        歌词
                    </label>
                    <input type="text" name="lyrics" value="__lyrics__">
                </div>
                <div class="row">
                    <label>
                        外链
                    </label>
                    <input type="text" name="url" value="__url__">
                </div>
                <div class="row actions">
                    <button type="submit">保存</button>
                </div>
            </form>
        `,
        render(data = {}){
            let placeholders = ['name','singer','lyrics','url']
            let htmlString = this.template
            placeholders.map((string)=>{
                htmlString = htmlString.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(htmlString)
        },
        reset(){
            this.render({})
        }
    }
    let model = {
        data: { name:'',singer:'',url:'',id:''},
        create(data){
            // 声明类型
            let Song = AV.Object.extend('Song');
            // 新建对象
            let song = new Song();
            // 设置名称
            song.set('name', data.name);
            // 设置优先级
            song.set('singer',data.singer);
            song.set('url',data.url);
            return song.save().then((res)=>{
                console.log(res);
                let {id, attributes} = res
                console.log(id,attributes)
                Object.assign(this.data, {
                    id,
                    name: attributes.name,
                    singer: attributes.singer,
                    url: attributes.url
                })
            }, (error)=>{
                console.error(error);
            });
        }
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            console.log('bindEvents打印的数据');
            this.bindEvents()
            window.eventHub.on('upload', (data)=>{
                console.log('song-form接收到上传歌曲的信息并重新渲染form内容');
                this.reset(data)
            })
        },
        reset(data){
            this.view.render(data)
        },
        bindEvents(){
            console.log($(this.view.el));
            $(this.view.el).on('submit', 'form', (e)=>{
                e.preventDefault()
                let needs = 'name singer url'.split(' ')
                let data = {}
                needs.map((item)=>{
                    data[item] = $(this.view.el).find(`[name=${item}]`).val()
                })
                this.model.create(data).then(()=>{
                    this.view.reset()
                    let newSong = JSON.parse(JSON.stringify(this.model.data))
                    console.log(newSong);
                    window.eventHub.emit('save', newSong)
                })
            })
        }
    }
    controller.init(view, model)
}