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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('song form');
{
    var view = {
        el: '.new-song-detail',
        template: '\n                <form class="form">\n                    <div class="song-info">\n                        <div class="picture">\n                            <img src="" alt="">\n                        </div>\n                        <div class="left-rows">\n                            <div class="row">\n                                <label>\n                                    \u6B4C\u540D\n                                </label>\n                                <input type="text" name="name" value="__name__">\n                            </div>\n                            <div class="row">\n                                <label>\n                                    \u6B4C\u624B\n                                </label>\n                                <input type="text" name="singer" value="__singer__">\n                            </div>\n                            <div class="row">\n                                <label>\n                                    \u5916\u94FE\n                                </label>\n                                <input type="text" name="url" value="__url__">\n                            </div>\n                            <div class="row">\n                                <label>\n                                    \u5C01\u9762\n                                </label>\n                                <input type="text" name="cover" value="__cover__">\n                            </div>\n                        </div>\n                        <div class="right-row">\n                            <div class="row">\n                                <label>\n                                    \u6B4C\u8BCD\n                                </label>\n                                <textarea name="lyrics" id="song-lyrics">__lyrics__</textarea>\n                                <!--<input type="text" name="lyrics" value="__lyrics__">-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row actions">\n                        <button type="submit">\u4FDD\u5B58</button>\n                    </div>\n                </form>\n        ',
        render: function render() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var placeholders = ['name', 'singer', 'lyrics', 'url', 'cover'];
            var htmlString = this.template;
            placeholders.map(function (string) {
                htmlString = htmlString.replace('__' + string + '__', data[string] || '');
            });
            $(this.el).html(htmlString);
            this.toggleNewAndEdit(data.id);
        },
        reset: function reset() {
            this.render({});
        },
        show: function show() {
            $(this.el).removeClass('hide');
        },
        hide: function hide() {
            $(this.el).addClass('hide');
        },
        toggleNewAndEdit: function toggleNewAndEdit(data) {
            if (data) {
                $(this.el).find('.form').prepend('<h3>编辑歌曲</h3>');
            } else {
                $(this.el).find('.form').prepend('<h3>新建歌曲</h3>');
            }
        },
        setCover: function setCover(cover) {
            $(this.el).find('img').attr('src', cover);
        }
    };
    var model = {
        data: { name: '', singer: '', url: '', id: '', lyrics: '', cover: '' },
        create: function create(data) {
            var _this = this;

            console.log('创建数据');
            // 声明类型
            var Song = AV.Object.extend('Song');
            // 新建对象
            var song = new Song();
            // 设置名称
            song.set('name', data.name);
            // 设置优先级
            song.set('singer', data.singer);
            song.set('url', data.url);
            song.set('cover', data.cover);
            song.set('lyrics', data.lyrics);
            return song.save().then(function (res) {
                console.log(res);
                var id = res.id,
                    attributes = res.attributes;

                console.log(id, attributes);
                Object.assign(_this.data, {
                    id: id,
                    name: attributes.name,
                    singer: attributes.singer,
                    url: attributes.url,
                    cover: attributes.cover,
                    lyrics: attributes.lyrics
                });
            }, function (error) {
                console.error(error);
            });
        },
        update: function update(data) {
            console.log('更新数据');
            // 第一个参数是 className，第二个参数是 objectId
            var song = AV.Object.createWithoutData('Song', this.data.id);
            // 修改属性
            song.set('name', data.name);
            song.set('singer', data.singer);
            song.set('url', data.url);
            song.set('cover', data.cover);
            song.set('lyrics', data.lyrics);
            // 保存到云端
            return song.save();
        }
    };
    var controller = {
        init: function init(view, model) {
            var _this2 = this;

            this.view = view;
            this.model = model;
            this.view.render(this.model.data);
            this.bindEvents();
            this.bindEventHub();
            window.eventHub.on('upload', function (data) {
                //song-form接收到上传歌曲的信息并重新渲染form内容
                _this2.reset(data);
            });
        },
        reset: function reset(data) {
            this.view.render(data);
        },
        bindEvents: function bindEvents() {
            var _this3 = this;

            console.log($(this.view.el));
            $(this.view.el).on('submit', 'form', function (e) {
                //点击保存后收集form中的数据
                e.preventDefault();
                var needs = 'name singer url cover lyrics'.split(' ');
                var data = {};
                needs.map(function (item) {
                    data[item] = $(_this3.view.el).find('[name=' + item + ']').val();
                });
                //收集数据后，判断是更新还是新建数据
                if (_this3.model.data.id) {
                    _this3.model.update(data).then(function (res) {
                        console.log('更新成功');
                        console.log(res);
                        Object.assign(data, {
                            id: res.id,
                            name: res.attributes.name,
                            singer: res.attributes.singer,
                            url: res.attributes.url,
                            cover: res.attributes.cover,
                            lyrics: res.attributes.lyrics
                        });
                        window.eventHub.emit('update', JSON.parse(JSON.stringify(data)));
                        _this3.model.data = { name: '', singer: '', url: '', id: '', lyrics: '', cover: '' };
                        _this3.view.hide();
                    });
                } else {
                    _this3.model.create(data).then(function () {
                        _this3.view.reset();
                        var newSong = JSON.parse(JSON.stringify(_this3.model.data));
                        console.log(newSong);
                        window.eventHub.emit('save', newSong);
                        _this3.model.data = { name: '', singer: '', url: '', id: '', lyrics: '', cover: '' };
                    });
                }
            });
        },
        bindEventHub: function bindEventHub() {
            var _this4 = this;

            window.eventHub.on('new', function () {
                _this4.view.hide();
            });
            window.eventHub.on('upload', function () {
                _this4.view.show();
            });
            window.eventHub.on('select', function (data) {
                console.log('song-form接收到select事件');
                console.log(data);
                Object.assign(_this4.model.data, data);
                _this4.view.show();
                _this4.view.render(_this4.model.data);
                console.log(_this4.model.data);
                _this4.view.setCover(_this4.model.data.cover);
            });
            window.eventHub.on('save', function () {
                _this4.view.hide();
            });
        }
    };
    controller.init(view, model);
}

/***/ })

/******/ });
//# sourceMappingURL=songForm.js.map