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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var view = {
        el: '.latestMusic',
        template: '\n            <h2 class="title">\u6700\u65B0\u97F3\u4E50</h2>\n            <p class="loading">\n                <img src="' + __webpack_require__(5) + '" alt="loading">\n            </p>\n            <ol id="latestSongs">\n            </ol>\n        ',
        render: function render(data) {
            var _this = this;

            $(this.el).html(this.template);
            var songs = data.songs;

            songs.map(function (song) {
                var $li = $('\n                    <li>\n                        <a href="./song.html?id=' + song.id + '">\n                            <h3>' + song.name + '</h3>\n                            <p class="singer">\n                                <svg class="icon sq" aria-hidden="true">\n                                    <use xlink:href="#icon-sq"></use>\n                                </svg>\n                                ' + song.singer + '\n                            </p>\n                            <a href="#">\n                                <svg class="icon play-circled" aria-hidden="true">\n                                  <use xlink:href="#icon-play-circle-big"></use>\n                                </svg>\n                            </a>\n                        </a>\n                    </li>\n                ');
                $(_this.el).find('ol').append($li);
            });
        },
        hideLoading: function hideLoading() {
            console.log('hideLoading执行');
            console.log($(this.el).find('.loading'));
            $(this.el).find('.loading').addClass('hide');
        },
        showLoading: function showLoading() {
            $(this.el).find('.loading').removeClass('hide');
        }
    };
    var model = {
        data: {
            songs: [],
            selectedId: undefined
        },
        find: function find() {
            var _this2 = this;

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
                    _this2.data.songs.push(songData);
                });
                return songs;
            });
        }
    };
    var controller = {
        init: function init(view, model) {
            var _this3 = this;

            this.view = view;
            this.model = model;
            this.view.render(model.data);
            this.model.find().then(function () {

                _this3.view.render(_this3.model.data);
                _this3.view.hideLoading();
            });
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
//# sourceMappingURL=indexLatestMusic.js.map