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
            console.log('--------data--------');
            console.log(data);
            console.log(htmlString);
            $(this.el).html(htmlString)
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            console.log('song-form eventHub前打印的数据');
            window.eventHub.on('upload', (data)=>{
                console.log('song-form打印的数据');
                console.log(data);
                this.reset(data)
            })
        },
        reset(data){
            this.view.render(data)
        }
    }
    controller.init(view, model)
}