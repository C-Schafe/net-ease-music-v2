{
    let view = {
        el: '.tab3',
        template: `
            <p class="loading">
                <img src="${require('../assets/loading.gif')}" alt="loading">
            </p>
            <div class="search-wraper">
                <svg class="icon search" aria-hidden="true">
                    <use xlink:href="#icon-search"></use>
                </svg>
                <input type="text" id="search" placeholder="搜索歌曲、歌手、专辑">
                <svg class="icon iconDeleteitem" aria-hidden="true">
                    <use xlink:href="#icon-iconDeleteitem"></use>
                </svg>
            </div>
            <ul class="search-result">
                <li class="default active">
                    <p>热门搜索</p>
                    <div class="default-tags">
                        <span>成都</span>
                        <span>猜不透</span>
                        <span>空空如也</span>
                        <span>远走高飞</span>
                        <span>钟无艳</span>
                        <span>说散就散</span>
                        <span>蜚蜚</span>
                        <span>失恋阵线联盟</span>
                        <span>小小的太阳</span>
                    </div>
                </li>
                <li class="searchFor">

                </li>

                <li class="searched ">
                    <p class="loading active">
                        <img src="" alt="loading">
                    </p>

                </li>
            </ul>
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
            tabName: 'tab3'
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