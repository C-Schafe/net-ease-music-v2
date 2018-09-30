console.log('song list');

{
    let view = {
        el: '.songList-container',
        template: `
            <ul class="song-list">
                <li class="active">远走高飞</li>
                <li>远走高飞</li>
                <li>远走高飞</li>
                <li>远走高飞</li>
                <li>远走高飞</li>
                <li>远走高飞</li>
            </ul>
        `,
        render(data){
            $(this.el).html(this.template)
        }
    }
    let model = {}
    let controller = {
        init(view,data){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
        }
    }
    controller.init(view, model)
}
