console.log('new song');

{
    let view = {
        el: '.new-song-wrapper',
        template: `
            <span class="new-song-button">新增歌曲</span>
        `,
        render(data){
            $(this.el).append(this.template)
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render()
            this.bindEvents()
        },
        bindEvents(){
            $(this.view.el).find('.new-song-button').on('click', ()=>{
                console.log('新增歌曲被点击')
                window.eventHub.emit('new')
            })
        }
    }
    controller.init(view, model)
}