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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('song list');

{
    var view = {
        el: '.songList-container',
        template: '\n            <h3>\u6B4C\u66F2\u5217\u8868</h3>\n            <ul class="song-list"></ul>\n        ',
        render: function render(data) {
            var _this = this;

            $(this.el).empty();
            var songs = data.songs,
                selectedId = data.selectedId;

            $(this.el).html(this.template);
            var liList = songs.map(function (song) {
                var $li = $('\n                    <li song-data-id="' + song.id + '">\n                        <a href="' + song.url + '" target="_blank">\n                            <svg class="icon play" aria-hidden="true">\n                                <use xlink:href="#icon-play2"></use>\n                            </svg>\n                        </a>\n                        <div class="song">\n                            <div class="li-song-info">\n                                <svg class="icon name" aria-hidden="true">\n                                    <use xlink:href="#icon-name"></use>\n                                </svg>\n                                <span class="song-name">' + song.name + '</span>\n                                <svg class="icon singer" aria-hidden="true">\n                                    <use xlink:href="#icon-singer"></use>\n                                </svg>\n                                <span class="song-singer">' + song.singer + '</span>\n                            </div>\n                            <div class="li-song-actions">\n                                <svg id="edit" class="icon edit" aria-hidden="true">\n                                    <use xlink:href="#icon-edit"></use>\n                                </svg>\n                                <svg id="delete" class="icon delete" aria-hidden="true">\n                                    <use xlink:href="#icon-delete"></use>\n                                </svg>\n                            </div>\n                        </div>\n                    </li>\n                ');
                if (song.id === selectedId) {
                    $li.addClass('active');
                }
                return $li;
            });
            liList.map(function (domLi) {
                $(_this.el).find('.song-list').append(domLi);
            });
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
            });
        },
        delete: function _delete(data) {
            var song = AV.Object.createWithoutData('Song', data);
            return song.destroy().then(function (success) {
                // 删除成功
                console.log('删除成功');
            }, function (error) {
                // 删除失败
            });
        }
    };
    var controller = {
        init: function init(view, model) {
            var _this3 = this;

            this.view = view;
            this.model = model;
            this.view.render(this.model.data);
            window.eventHub.on('save', function (data) {
                _this3.model.data.songs.push(data);
                _this3.view.render(_this3.model.data);
            });
            this.model.find().then(function () {
                _this3.view.render(_this3.model.data);
                _this3.bindEvents();
                _this3.bindEventHub();
            });
        },
        bindEvents: function bindEvents() {
            var _this4 = this;

            $(this.view.el).on('click', '.edit', function (e) {
                var liId = $(e.currentTarget).parents('li').attr('song-data-id');
                _this4.model.data.selectedId = liId;
                _this4.view.render(_this4.model.data);
                var data = void 0;
                var songs = _this4.model.data.songs;

                songs.map(function (song) {
                    if (song.id === _this4.model.data.selectedId) {
                        data = song;
                    }
                });
                window.eventHub.emit('select', JSON.parse(JSON.stringify(data)));
            });
            $(this.view.el).on('click', '.delete', function (e) {

                alertify.confirm("警告!", "确认删除此歌曲？", function () {
                    alertify.success('成功删除');
                    var liId = $(e.currentTarget).parents('li').attr('song-data-id');
                    console.log(_this4.model.data);
                    _this4.model.delete(liId).then(function (res) {
                        console.log(res);
                        _this4.model.data = { songs: [], selectedId: undefined };
                        _this4.init(view, model);
                    });
                }, function () {
                    alertify.error('取消');
                }).set('labels', { ok: '删除', cancel: '取消' });;
            });
        },
        bindEventHub: function bindEventHub() {
            var _this5 = this;

            window.eventHub.on('new', function () {
                _this5.model.data.selectedId = undefined;
                _this5.view.render(_this5.model.data);
            });
            window.eventHub.on('update', function (data) {
                console.log(_this5.model.data);
                var songs = _this5.model.data.songs;

                var newSongs = songs.map(function (song) {
                    if (song.id === data.id) {
                        song = data;
                    }
                    return song;
                });
                _this5.model.data.songs = newSongs;
                _this5.view.render(_this5.model.data);
            });
        }
    };
    controller.init(view, model);
}

/***/ })

/******/ });
//# sourceMappingURL=songList.js.map