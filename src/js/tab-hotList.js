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
            $(this.el).html(this.template)
        },
        show(){
            $(this.el).addClass('active')
        },
        hide(){
            $(this.el).removeClass('active')
        }
    }
    let model = {
        data: {
            tabName: 'tab2',

        }
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(model.data)
            this.bindEventHub()
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
        }
    }
    controller.init(view, model)
}