{
    let view = {
        el: 'header',
        template: `
            <div class="window-actions">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="logo-and-contacts">
                <div class="logo">
                    <svg class="icon beat" aria-hidden="true">
                        <use xlink:href="#icon-beat1"></use>
                    </svg>
                    <h1>YourBeats</h1>
                </div>
                <div class="contacts">
                    <span class="avatar">
                        <img src="../assets/avatar.png" alt="" height="30px" width="30px">
                        <span class="my-name">LouisChiang</span>
                    </span>
                    <span class="wechat">
                        <svg class="icon wechat" aria-hidden="true">
                            <use xlink:href="#icon-wechat"></use>
                        </svg>
                        <span>18219114350</span>
                    </span>
                    <span class="phone">
                        <svg class="icon phone" aria-hidden="true">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                        <span>18219114350</span>
                    </span>
                    <span class="mail">
                        <svg class="icon mail" aria-hidden="true">
                            <use xlink:href="#icon-mail"></use>
                        </svg>
                        <span>louisjiangmy@gmail.com</span>
                    </span>
                    <span class="blog">
                        <svg class="icon blog" aria-hidden="true">
                            <use xlink:href="#icon-blog"></use>
                        </svg>
                        <a href="https://www.jianshu.com/u/c2e786a7a188">Blog</a>
                    </span>
                    <span class="github">
                        <svg class="icon github" aria-hidden="true">
                            <use xlink:href="#icon-github"></use>
                        </svg>
                        <a href="https://github.com/C-Schafe">Github</a>
                    </span>
                </div>
            </div>
        `,
        render(data){
            $(this.el).append(this.template)
        }
    }
    let model = {}
    let controller = {
        init(){
            this.view = view
            this.model = model
            this.view.render()
        }
    }
    controller.init(view,model)
}