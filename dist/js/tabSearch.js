/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var view = {
        el: '.tab3',
        template: '\n            <div class="search-wraper">\n                <svg class="icon search" aria-hidden="true">\n                    <use xlink:href="#icon-search"></use>\n                </svg>\n                <input type="text" id="search" placeholder="\u641C\u7D22\u6B4C\u66F2\u3001\u6B4C\u624B\u3001\u4E13\u8F91">\n                <svg class="icon iconDeleteitem" aria-hidden="true">\n                    <use xlink:href="#icon-iconDeleteitem"></use>\n                </svg>\n            </div>\n            <ul class="search-result">\n                <li class="default active">\n                    <p>\u70ED\u95E8\u641C\u7D22</p>\n                    <div class="default-tags">\n                        <span>\u6210\u90FD</span>\n                        <span>\u731C\u4E0D\u900F</span>\n                        <span>\u7A7A\u7A7A\u5982\u4E5F</span>\n                        <span>\u8FDC\u8D70\u9AD8\u98DE</span>\n                        <span>\u949F\u65E0\u8273</span>\n                        <span>\u8BF4\u6563\u5C31\u6563</span>\n                        <span>\u871A\u871A</span>\n                        <span>\u5931\u604B\u9635\u7EBF\u8054\u76DF</span>\n                        <span>\u5C0F\u5C0F\u7684\u592A\u9633</span>\n                    </div>\n                </li>\n                <li class="searchFor">\n\n                </li>\n\n                <li class="searched ">\n                    <p class="loading active">\n                        <img src="" alt="loading">\n                    </p>\n\n                </li>\n            </ul>\n        ',
        render: function render(data) {
            $(this.el).html(this.template);
        },
        show: function show() {
            $(this.el).addClass('active');
        },
        hide: function hide() {
            $(this.el).removeClass('active');
        }
    };
    var model = {
        data: {
            tabName: 'tab3'
        }
    };
    var controller = {
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            this.view.render(model.data);
            this.bindEventHub();
        },
        bindEventHub: function bindEventHub() {
            var _this = this;

            window.eventHub.on('selectTab', function (data) {
                console.log(data);
                if (_this.model.data.tabName === data) {
                    _this.view.show();
                } else {
                    _this.view.hide();
                }
            });
        }
    };
    controller.init(view, model);
}

var timer = undefined;
var $resultLis = $('.search-result>li');
$('#search').on('input', function (e) {
    $(this).addClass('active');
    clearSearchResult();
    //$('.searched>p').remove()
    $('.search-advise').remove();
    $('.searched>.loading').addClass('active');
    console.log($resultLis.eq(0));
    $resultLis.eq(1).addClass('active').siblings().removeClass('active');

    var value = $(e.currentTarget).val().trim();
    $('.search-result>.searchFor').text('\u641C\u7D22"' + value + '"');
    console.log(value, '(搜索值)');
    if (value === '') {
        return;
    }

    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        search(value).then(function (result) {
            timer = undefined;
            if (result.length !== 0) {
                var $advise = $('\n\t\t\t    \t\t\t<div class="search-advise">\n\t\t\t\t\t\t\t\t<svg class="icon search" aria-hidden="true">\n\t\t\t\t\t\t\t\t    <use xlink:href="#icon-search"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<p>' + result[0].name + '</p>\n\t\t\t\t\t\t\t</div>\n\t\t    \t\t\t');
                $('.search-result').append($advise);
                //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
                console.log('放到h3了');
            } else {
                return;
                //$('.search-result').text('没有结果')
            }
        }).then(function () {
            searchBaseonAdvise();
        });
    }, 500);
});

$('.searchFor').on('click', function () {
    var keywords = $('#search').val();
    $('.search-advise').remove();
    $resultLis.eq(2).addClass('active').siblings().removeClass('active');
    search(keywords).then(function (result) {
        if (result.length !== 0) {
            var $result = $('\n\t\t    \t\t\t<p class="best">\u6700\u4F73\u5339\u914D</p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href="./song.html?id=' + result[0].id + '">\n\t\t\t\t\t\t\t\t<h3>' + result[0].name + '</h3>\n\t\t\t\t\t\t\t    <p>' + result[0].singer + '-' + result[0].albumn + '</p>\n\t\t\t\t\t\t        <a href="#">\n\t\t\t\t\t\t\t        <svg class="icon play-circled" aria-hidden="true">\n\t\t\t\t\t                  <use xlink:href="#icon-play-circle-big"></use>\n\t\t\t\t\t\t            </svg>\n\t\t\t\t\t            </a>\n\t\t\t\t\t        </a>\n\t\t\t\t        </div>\n\t    \t\t\t');
            //$('.loading').remove()
            $('.searched>.loading').removeClass('active');
            $('.searched').append($result);
            //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
            console.log('放到h3了');
        } else {
            $('.loading').remove();
            var $p = $('<p class="no-result">暂时没有结果</p>');

            $('.searched').empty().append($p);
        }
    });
});
//搜索关键字的歌曲
function searchBaseonAdvise() {
    $('.search-advise').on('click', function () {
        var keywords = $('#search').val();
        $('.search-advise').remove();
        $resultLis.eq(2).addClass('active').siblings().removeClass('active');
        search(keywords).then(function (result) {
            if (result.length !== 0) {
                var $result = $('\n\t\t\t    \t\t\t<p class="best">\u6700\u4F73\u5339\u914D</p>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href="./song.html?id=' + result[0].id + '">\n\t\t\t\t\t\t\t\t\t<h3>' + result[0].name + '</h3>\n\t\t\t\t\t\t\t\t    <p>' + result[0].singer + '-' + result[0].albumn + '</p>\n\t\t\t\t\t\t\t        <a href="#">\n\t\t\t\t\t\t\t\t        <svg class="icon play-circled" aria-hidden="true">\n\t\t\t\t\t\t                  <use xlink:href="#icon-play-circle-big"></use>\n\t\t\t\t\t\t\t            </svg>\n\t\t\t\t\t\t            </a>\n\t\t\t\t\t\t        </a>\n\t\t\t\t\t        </div>\n\t\t    \t\t\t');
                //$('.loading').remove()
                $('.searched>.loading').removeClass('active');
                $('.searched').append($result);
                //$('.search-result>.searched>h3').text(result.map(r=>r.name).join(','))
                console.log('放到h3了');
            } else {
                $('.loading').remove();
                var $p = $('<p class="no-result">暂时没有结果</p>');
                $('.searched').append($p);
            }
        });
    });
}

//按x删除搜索关键字并返回默认搜索界面
$('.iconDeleteitem').on('click', function () {
    console.log('删除关键词');
    clearSearchResult();
    $('.searched>.loading').addClass('active');
    $('.searched>p').remove();
    $('#search').val('').removeClass('active');
    $resultLis.eq(0).addClass('active').siblings().removeClass('active');
});

function search(keyword) {
    return new Promise(function (resolve, reject) {
        var database = [{ "id": '5bb5cffcee920a0067b8013b', "name": "成都", "singer": "赵雷", "albumn": "成都" }, { "id": '5bb5cfacac502e00638d1ed8', "name": "猜不透", "albumn": "猜不透（Cover.丁当）", "singer": "菌菌酱" }, { "id": '5bb5f1e8fb4ffe0069f6f78c', "name": "空空如也", "albumn": "空空如也", "singer": "任然" }, { "id": '5bb5eacf0b6160006a19c78b', "name": "远走高飞", "albumn": "Hello 1", "singer": "金志文/徐佳莹" }, { "id": '5bb5f763fb4ffe0069acd465', "name": "钟无艳", "albumn": "3/8", "singer": "谢安琪" }, { "id": '5bb5f45e0b6160006f28b8e4', "name": "说散就散", "albumn": "说散就散", "singer": "袁娅维" }, { "id": '5bb5ee250b6160006a19f852', "name": "千千阙歌", "albumn": "千千阙歌", "singer": "陈慧娴" }, { "id": '5bb5f5b6ac502e00638f553d', "name": "蜚蜚", "albumn": "All The Best 纪念全集", "singer": "陈僖仪" }, { "id": '5bb5f10eee920a0067b9f722', "name": "失恋阵线联盟", "albumn": "失恋阵线联盟", "singer": "草蜢" }, { "id": '5bb5f02a0b6160006a1a1586', "name": "小小的太阳", "albumn": "月亮 太阳", "singer": "张宇" }];
        var result = database.filter(function (item) {
            return item.name.indexOf(keyword) >= 0;
        });
        setTimeout(function () {
            resolve(result);
        }, Math.random() * 200 + 1000);
    });
}

window.search = search;

function pad(number) {
    return number >= 10 ? number + '' : '0' + number;
}
function clearSearchResult() {
    $('.searched>.best, .searched>div').remove();
}

/***/ })

/******/ });
//# sourceMappingURL=tabSearch.js.map