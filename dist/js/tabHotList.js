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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var view = {
        el: '.tab2',
        template: '\n            <p class="loading">\n                <img src="' + __webpack_require__(5) + '" alt="loading">\n            </p>\n            <div class="board">\n                <div class="hot-music-icon"></div>\n                <div class="hot-music-date"></div>\n            </div>\n            <ol id="tab2List">\n\n            </ol>\n        ',
        render: function render(data) {
            console.log('tab hot list render执行');
            $(this.el).html(this.template);
            this.getDate();
        },
        show: function show() {
            $(this.el).addClass('active');
        },
        hide: function hide() {
            $(this.el).removeClass('active');
        },
        getDate: function getDate() {
            console.log('getdate执行');
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            console.log($(this.el));
            $(this.el).find('.hot-music-date').text('\u66F4\u65B0\u65E5\u671F\uFF1A' + this.pad(month) + '\u6708' + day + '\u65E5');
        },
        pad: function pad(number) {
            return number >= 10 ? number + '' : '0' + number;
        }
    };
    var model = {
        data: {
            tabName: 'tab2',
            songs: [],
            selectedId: undefined
        },
        find: function find() {
            var _this = this;

            var query = new AV.Query('Song');
            return query.find().then(function (songs) {
                //songs是所有歌曲，是一个数组，下面从数组每一项的对象中获取歌曲数据
                songs.map(function (song) {
                    var songData = {
                        id: song.id,
                        name: song.attributes.name,
                        singer: song.attributes.singer,
                        url: song.attributes.url
                    };
                    _this.data.songs.push(songData);
                });
                return songs;
            });
        }
    };
    var controller = {
        init: function init(view, model) {
            var _this2 = this;

            this.view = view;
            this.model = model;
            this.view.render(model.data);
            this.bindEventHub();
            this.model.find().then(function () {
                console.log(_this2.model.data.songs);
                var songs = _this2.model.data.songs;
                songs.forEach(function (e, i) {
                    var $li = $('\n\t\t\t\t\t\t\t<li class="hot-music-li">\n\t\t\t\t\t\t\t\t<a id="hot-music-item" href="./song.html?id=' + e.id + '">\n\t\t\t\t\t\t\t\t\t<div class="rank">' + _this2.pad(i + 1) + '</div>\n\t\t\t\t\t\t\t\t\t<div class="hot-music-info">\n\t\t\t\t\t\t\t\t\t\t<h3>' + e.name + '</h3>\n\t\t\t\t\t\t\t\t\t    <p>' + e.singer + '</p>\n\t\t\t\t\t\t\t\t        <svg class="icon play-circled" aria-hidden="true">\n\t\t\t\t\t\t                  <use xlink:href="#icon-play-circle-big"></use>\n\t\t\t\t\t\t\t            </svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t        </a>\n\t\t\t\t\t        </li>\n\t\t\t\t\t\t');
                    $('#tab2List').append($li);
                });
            }).then(function () {
                $(_this2.view.el).find('.loading').remove();
            });
        },
        bindEventHub: function bindEventHub() {
            var _this3 = this;

            window.eventHub.on('selectTab', function (data) {
                console.log(data);
                if (_this3.model.data.tabName === data) {
                    _this3.view.show();
                } else {
                    _this3.view.hide();
                }
            });
        },
        pad: function pad(number) {
            return number >= 10 ? number + '' : '0' + number;
        }
    };
    controller.init(view, model);
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhKAAoAPAAANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"

/***/ })

/******/ });
//# sourceMappingURL=tabHotList.js.map