import  songCss from '../css/song.scss'

{
    let view = {
        el: '.page',
        render(data){
            this.createCoverAndBg(data.songData)
        },
        createCoverAndBg(data){
            let $img = $(`<img class="cover" src="${data.cover}">`)
            $('.disc').append($img)
            $('.background').css('background',`transparent url(${data.cover}) no-repeat center center`)
        }
    }
    let model = {
        data: {
            songData: {}
        },
        setSongId(id){
            this.data.songData.id = id
        },
        getSongData(id){
            let query = new AV.Query('Song');
            return query.get(id).then((song)=>{
                let songData = {
                    id:song.id,
                    name: song.attributes.name,
                    singer: song.attributes.singer,
                    cover: song.attributes.cover,
                    lyrics: song.attributes.lyrics,
                    url: song.attributes.url
                }
                Object.assign(this.data.songData, songData)
                return song
            }, (error)=>{console.log(error);});
        }
    }
    let controller = {
        init(){
            this.view = view
            this.model = model
            this.getSongId()
            this.model.getSongData(this.model.data.songData.id).then(()=>{
                this.view.render(this.model.data)
                let {url, name, lyrics, singer} = this.model.data.songData
                this.initPlayer.call(undefined, url)
                this.initText.call(undefined, name, lyrics, singer)
            })
        },
        getSongId(){
            let search = location.search
            if(search.indexOf('?') === 0){
                search = search.substring(1)
            }
            let songId = search.split('=')[1]
            this.model.setSongId(songId)
        },
        initPlayer(url){
            let audio = document.createElement('audio');
            audio.src = url
            audio.oncanplay = function(){
                $('.light, .cover').css('animation-play-state','paused')
                setTimeout(function(){
                    $('.disc-container').addClass('playing')
                    $('.icon-wraper').addClass('pausing')
                },0)
            }
            $('.icon-pause').on('click', function(){
                console.log('暂停被点了')
                audio.pause()
                $('.light, .cover').css('animation-play-state','paused')
                $('.icon-wraper').removeClass('playing')
                $('.icon-wraper').addClass('pausing')
            })
            $('.icon-play').on('click', function(){
                console.log('播放被点了')
                audio.play()
                $('.light, .cover').css('animation-play-state','running')
                $('.icon-wraper').removeClass('pausing')
                $('.icon-wraper').addClass('playing')
            })
            //控制歌词的显示
            setInterval(()=>{
                //return
                let musicCurrentTime = audio.currentTime
                //console.log(musicCurrentTime)
                let minute = ~~(musicCurrentTime / 60)
                let second = musicCurrentTime - minute * 60
                let time = `${controller.pad(minute)}:${controller.pad(second)}`
                //console.log(minute, second, time)
                let $lines = $('.lines>p')
                //console.log($lines)
                let $showLine
                for(let i = 0; i < $lines.length; i++){
                    let currentLineTime = $lines.eq(i).attr('data-time')
                    let nextLineTime = $lines.eq(i+1).attr('data-time')
                    //console.log(currentLineTime, nextLineTime)
                    if( $lines.eq(i+1).length !== 0 && time > currentLineTime && time < nextLineTime){
                        $showLine = $lines.eq(i)
                        //console.log($showLine)
                        break
                    }
                }
                if($showLine){
                    $showLine.addClass('active').prev().removeClass('active')
                    let lineOffset = $showLine.offset().top
                    let linesOffset = $('.lines').offset().top
                    let lineHeight = $('.lyrics').height()/3
                    let moveOffset = lineOffset - linesOffset - lineHeight
                    //console.log(moveOffset)
                    $('.lines').css('transform', `translateY(-${moveOffset}px)`)
                }
            },300)
        },
        pad(number){
            return number >= 10 ? number + '' : '0' + number
        },
        initText(name, lyric, singer){
            //console.log(name, lyric, singer)
            $('.song-name').text(name)
            $('.song-singer').text(singer)
            let array = lyric.split('\n')
            let regex = /^\[(.+)\](.+)$/
            array = array.map(function(string){
                let matches = string.match(regex)
                if(matches){
                    return {time: matches[1], words: matches[2]}
                }
            })
            let $lyrics = $('.lyrics')
            array.map(function(object){
                if(object){
                    let $p = $('</p>')
                    $p.attr('data-time', object.time).text(object.words)
                    $p.appendTo($lyrics.children('.lines'))
                }
            })
        }
    }
    controller.init(view, model)
}