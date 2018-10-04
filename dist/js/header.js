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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var view = {
        el: 'header',
        template: '\n            <div class="window-actions">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n            <div class="logo-and-contacts">\n                <div class="logo">\n                    <svg class="icon beat" aria-hidden="true">\n                        <use xlink:href="#icon-beat1"></use>\n                    </svg>\n                    <h1>YourBeats</h1>\n                </div>\n                <div class="contacts">\n                    <span class="avatar">\n                        <img src="./assets/avatar.png" alt="" height="30px" width="30px">\n                        <span class="my-name">LouisChiang</span>\n                    </span>\n                    <span class="wechat">\n                        <svg class="icon wechat" aria-hidden="true">\n                            <use xlink:href="#icon-wechat"></use>\n                        </svg>\n                        <span>18219114350</span>\n                    </span>\n                    <span class="phone">\n                        <svg class="icon phone" aria-hidden="true">\n                            <use xlink:href="#icon-phone"></use>\n                        </svg>\n                        <span>18219114350</span>\n                    </span>\n                    <span class="mail">\n                        <svg class="icon mail" aria-hidden="true">\n                            <use xlink:href="#icon-mail"></use>\n                        </svg>\n                        <span>louisjiangmy@gmail.com</span>\n                    </span>\n                    <span class="blog">\n                        <svg class="icon blog" aria-hidden="true">\n                            <use xlink:href="#icon-blog"></use>\n                        </svg>\n                        <a href="https://www.jianshu.com/u/c2e786a7a188">Blog</a>\n                    </span>\n                    <span class="github">\n                        <svg class="icon github" aria-hidden="true">\n                            <use xlink:href="#icon-github"></use>\n                        </svg>\n                        <a href="https://github.com/C-Schafe">Github</a>\n                    </span>\n                </div>\n            </div>\n        ',
        render: function render(data) {
            $(this.el).append(this.template);
        }
    };
    var model = {};
    var controller = {
        init: function init() {
            this.view = view;
            this.model = model;
            this.view.render();
        }
    };
    controller.init(view, model);
}

/***/ })

/******/ });
//# sourceMappingURL=header.js.map