{
    let view = {
        el: '.upload-song',
        template: `
            <div class="loading-container">
                <div class="loading"></div>
            </div>
        `,
        render(data){
            console.log('loading的render执行');
            $(this.el).append(this.template)
        },
        show(){
            $(this.el).find('.loading-container').addClass('active')
        },
        hide(){
            $(this.el).find('.loading-container').removeClass('active')
        }
    }
    let model = {}
    let controller = {
        init(view,model){
            this.view = view
            this.model = model
            this.view.render(this.model)
            this.bindEventHub()
        },
        bindEventHub(){
            window.eventHub.on('beforeUpload', ()=>{
                console.log('loading展示');
                this.view.show()
            })
            window.eventHub.on('afterUpload', ()=>{
                console.log('loading消失');
                this.view.hide()
            })
        }
    }
    controller.init(view,model)
}