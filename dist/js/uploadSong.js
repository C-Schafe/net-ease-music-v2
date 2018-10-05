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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('upload song');

{
    var view = {
        el: $('.upload-song'),
        template: '\n            <h3>\u4E0A\u4F20\u6B4C\u66F2</h3>\n            <div id="upload-song-area">\n                \u62D6\u66F3\u6B4C\u66F2\u5230\u6B64\u5904\u6216\u70B9\u51FB "\u9009\u62E9\u6587\u4EF6" \u4E0A\u4F20\u6B4C\u66F2\n            </div>\n            <div class="upload-button-wrapper">\n                <span id="upload-button">\u9009\u62E9\u6587\u4EF6</span>\n            </div>\n        ',
        find: function find(selector) {
            return this.el.find(selector)[0];
        },
        render: function render(data) {
            this.el.append(this.template);
        },
        show: function show() {
            $(this.el).removeClass('hide');
        },
        hide: function hide() {
            $(this.el).addClass('hide');
        }
    };
    var model = {};
    var controller = {
        init: function init(view, data) {
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEventHub();
        },

        //初始化七牛上传歌曲功能
        initQiniu: function initQiniu() {
            var uploader = Qiniu.uploader({
                disable_statistics_report: false, // 禁止自动发送上传统计信息到七牛，默认允许发送
                runtimes: 'html5', // 上传模式,依次退化
                browse_button: this.view.find('#upload-button'), // 上传选择的点选按钮，**必需**
                // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
                // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
                // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
                // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
                uptoken_url: 'http://localhost:8888/uptoken', // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
                // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
                //    // do something
                //    return uptoken;
                // },
                get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的 uptoken
                // downtoken_url: '/downtoken',
                // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
                // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
                // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
                domain: 'pfk6bv9od.bkt.clouddn.com', // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
                //pfk6bv9od.bkt.clouddn.com
                max_file_size: '40mb', // 最大文件体积限制
                dragdrop: true, // 开启可拖曳上传
                drop_element: this.view.find('#upload-song-area'), // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
                auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
                //x_vars : {
                //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
                //    'time' : function(up,file) {
                //        var time = (new Date()).getTime();
                // do something with 'time'
                //        return time;
                //    },
                //    'size' : function(up,file) {
                //        var size = file.size;
                // do something with 'size'
                //        return size;
                //    }
                //},
                init: {
                    'FilesAdded': function FilesAdded(up, files) {
                        plupload.each(files, function (file) {
                            // 文件添加进队列后,处理相关的事情
                        });
                    },
                    'BeforeUpload': function BeforeUpload(up, file) {
                        // 每个文件上传前,处理相关的事情
                        window.eventHub.emit('beforeUpload');
                    },
                    'UploadProgress': function UploadProgress(up, file) {},
                    'FileUploaded': function FileUploaded(up, file, info) {
                        // 每个文件上传成功后,处理相关的事情
                        // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
                        // {
                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                        //    "key": "gogopher.jpg"
                        //  }
                        // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
                        window.eventHub.emit('afterUpload');
                        var domain = up.getOption('domain');
                        var res = JSON.parse(info.response);
                        var sourceLink = 'http://' + domain + '/' + encodeURIComponent(res.key); //获取上传成功后的文件的Url
                        console.log(sourceLink);
                        var response = JSON.parse(info.response);
                        var songData = {
                            name: response.key,
                            hash: response.hash,
                            url: sourceLink
                        };
                        console.log('upload eventHub前打印的数据');
                        window.eventHub.emit('upload', songData);
                    },
                    'Error': function Error(up, err, errTip) {
                        //上传出错时,处理相关的事情
                    },
                    'UploadComplete': function UploadComplete() {
                        //队列文件处理完毕后,处理相关的事情
                    }
                }
            });
        },
        bindEventHub: function bindEventHub() {
            var _this = this;

            window.eventHub.on('new', function () {
                _this.view.show();
            });
            window.eventHub.on('upload', function () {
                _this.view.hide();
            });
            window.eventHub.on('select', function () {
                _this.view.hide();
            });
            window.eventHub.on('update', function () {
                _this.view.show();
            });
            window.eventHub.on('save', function () {
                _this.view.show();
            });
        }
    };
    controller.init(view, model);
    controller.initQiniu();
}

/***/ })

/******/ });
//# sourceMappingURL=uploadSong.js.map