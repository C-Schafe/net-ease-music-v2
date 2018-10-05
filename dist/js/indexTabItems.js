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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
    var view = {
        el: '.siteNav',
        template: '\n            <ol class="tabItems">\n                <li class="active" tab-name="tab1"><span>\u63A8\u8350\u97F3\u4E50</span></li>\n                <li tab-name="tab2"><span>\u70ED\u6B4C\u699C</span></li>\n                <li tab-name="tab3"><span>\u641C\u7D22</span></li>\n            </ol>\n        ',
        render: function render(data) {
            $(this.el).html(this.template);
        },
        activeItem: function activeItem(itemName, item) {
            if (itemName === $(item).attr('tab-name')) {
                $(this.el).find('[tab-name=' + itemName + ']').addClass('active').siblings().removeClass('active');
            }
        }
    };
    var model = {};
    var controller = {
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            this.view.render(model.data);
            this.bindEvents();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            $(this.view.el).on('click', 'li', function (e) {
                var $li = $(e.currentTarget);
                console.log($li);
                var tabName = $li.attr('tab-name');
                _this.view.activeItem(tabName, $li);
                window.eventHub.emit('selectTab', tabName);
            });
        }
    };
    controller.init(view, model);
}

/***/ })

/******/ });
//# sourceMappingURL=indexTabItems.js.map