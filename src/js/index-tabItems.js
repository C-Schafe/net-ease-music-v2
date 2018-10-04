{
    let view = {
        el: '.siteNav',
        template: `
            <ol class="tabItems">
                <li class="active" tab-name="tab1"><span>推荐音乐</span></li>
                <li tab-name="tab2"><span>热歌榜</span></li>
                <li tab-name="tab3"><span>搜索</span></li>
            </ol>
        `,
        render(data){
            $(this.el).html(this.template)
        },
        activeItem(itemName, item){
            if(itemName === $(item).attr('tab-name')){
                $(this.el).find(`[tab-name=${itemName}]`).addClass('active').siblings().removeClass('active')
            }
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(model.data)
            this.bindEvents()
        },
        bindEvents(){
            $(this.view.el).on('click', 'li', (e)=>{
                let $li = $(e.currentTarget)
                console.log($li);
                let tabName = $li.attr('tab-name')
                this.view.activeItem(tabName, $li)
                window.eventHub.emit('selectTab', tabName)
            })
        }
    }
    controller.init(view, model)
}