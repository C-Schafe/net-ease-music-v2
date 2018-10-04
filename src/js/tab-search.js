{
    let view = {
        el: '.tab3',
        template: `
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

let timer = undefined
let $resultLis = $('.search-result>li')
$('#search').on('input', function(e){
    $(this).addClass('active')
    clearSearchResult()
    //$('.searched>p').remove()
    $('.search-advise').remove()
    $('.searched>.loading').addClass('active')
    console.log($resultLis.eq(0))
    $resultLis.eq(1).addClass('active').siblings().removeClass('active')

    let value = $(e.currentTarget).val().trim()
    $('.search-result>.searchFor').text(`搜索"${value}"`)
    console.log(value,'(搜索值)')
    if( value === ''){return}

    if(timer){clearTimeout(timer)}
    timer = setTimeout(()=>{
        search(value).then((result)=>{
            timer = undefined
            if(result.length !== 0 ){
                let $advise = $(`
			    			<div class="search-advise">
								<svg class="icon search" aria-hidden="true">
								    <use xlink:href="#icon-search"></use>
								</svg>
								<p>${result[0].name}</p>
							</div>
		    			`)
                $('.search-result').append($advise)
                //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
                console.log('放到h3了')
            }else{
                return
                //$('.search-result').text('没有结果')
            }
        }).then(()=>{searchBaseonAdvise()})
    },500)
})


$('.searchFor').on('click', function(){
    let keywords = $('#search').val()
    $('.search-advise').remove()
    $resultLis.eq(2).addClass('active').siblings().removeClass('active')
    search(keywords).then(function(result){
        if(result.length !== 0 ){
            let $result = $(`
		    			<p class="best">最佳匹配</p>
						<div>
							<a href="./song.html?id=${result[0].id}">
								<h3>${result[0].name}</h3>
							    <p>${result[0].singer}-${result[0].albumn}</p>
						        <a href="#">
							        <svg class="icon play-circled" aria-hidden="true">
					                  <use xlink:href="#icon-play-circle-big"></use>
						            </svg>
					            </a>
					        </a>
				        </div>
	    			`)
            //$('.loading').remove()
            $('.searched>.loading').removeClass('active')
            $('.searched').append($result)
            //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
            console.log('放到h3了')
        }else{
            $('.loading').remove()
            let $p = $('<p class="no-result">暂时没有结果</p>')

            $('.searched').empty().append($p)
        }
    })
})
//搜索关键字的歌曲
function searchBaseonAdvise(){
    $('.search-advise').on('click', function(){
        let keywords = $('#search').val()
        $('.search-advise').remove()
        $resultLis.eq(2).addClass('active').siblings().removeClass('active')
        search(keywords).then(function(result){
            if(result.length !== 0 ){
                let $result = $(`
			    			<p class="best">最佳匹配</p>
							<div>
								<a href="./song.html?id=${result[0].id}">
									<h3>${result[0].name}</h3>
								    <p>${result[0].singer}-${result[0].albumn}</p>
							        <a href="#">
								        <svg class="icon play-circled" aria-hidden="true">
						                  <use xlink:href="#icon-play-circle-big"></use>
							            </svg>
						            </a>
						        </a>
					        </div>
		    			`)
                //$('.loading').remove()
                $('.searched>.loading').removeClass('active')
                $('.searched').append($result)
                //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
                console.log('放到h3了')
            }else{
                $('.loading').remove()
                let $p = $('<p class="no-result">暂时没有结果</p>')
                $('.searched').append($p)
            }
        })
    })
}



//按x删除搜索关键字并返回默认搜索界面
$('.iconDeleteitem').on('click', function(){
    console.log('删除关键词')
    clearSearchResult()
    $('.searched>.loading').addClass('active')
    $('.searched>p').remove()
    $('#search').val('').removeClass('active')
    $resultLis.eq(0).addClass('active').siblings().removeClass('active')
})

function search(keyword){
    return new Promise((resolve, reject)=>{
        let database = [
            {"id":'5bb5cffcee920a0067b8013b', "name":"成都", "singer":"赵雷","albumn":"成都"},
            {"id":'5bb5cfacac502e00638d1ed8', "name":"猜不透", "albumn":"猜不透（Cover.丁当）", "singer":"菌菌酱"},
            {"id":'5bb5f1e8fb4ffe0069f6f78c', "name":"空空如也","albumn":"空空如也","singer":"任然"},
            {"id":'5bb5eacf0b6160006a19c78b', "name":"远走高飞","albumn":"Hello 1","singer":"金志文/徐佳莹"},
            {"id":'5bb5f763fb4ffe0069acd465', "name":"钟无艳","albumn":"3/8","singer":"谢安琪"},
            {"id":'5bb5f45e0b6160006f28b8e4', "name":"说散就散","albumn":"说散就散","singer":"袁娅维"},
            {"id":'5bb5ee250b6160006a19f852', "name":"千千阙歌","albumn":"千千阙歌","singer":"陈慧娴"},
            {"id":'5bb5f5b6ac502e00638f553d', "name":"蜚蜚","albumn":"All The Best 纪念全集","singer":"陈僖仪"},
            {"id":'5bb5f10eee920a0067b9f722', "name":"失恋阵线联盟","albumn":"失恋阵线联盟","singer":"草蜢"},
            {"id":'5bb5f02a0b6160006a1a1586', "name":"小小的太阳","albumn":"月亮 太阳","singer":"张宇"}
        ]
        let result = database.filter((item)=>{
            return item.name.indexOf(keyword) >= 0
        })
        setTimeout(()=>{
            resolve(result)
        }, (Math.random() * 200 + 1000))
    })
}

window.search = search

function pad(number){
    return number >= 10 ? number + '' : '0' + number
}
function clearSearchResult(){
    $('.searched>.best, .searched>div').remove()
}