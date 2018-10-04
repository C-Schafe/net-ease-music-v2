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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(2);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _admin = __webpack_require__(5);

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('admin');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/lib/loader.js!./admin.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/src/index.js!../../node_modules/sass-loader/lib/loader.js!./admin.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "*{margin:0;padding:0;box-sizing:border-box}* ul>li{list-style:none}.ajs-dialog{margin-top:300px}@-webkit-keyframes loading{to{height:60px;box-shadow:0 0 #30b286}10%{box-shadow:0 -20px #30b286;height:80px}}@keyframes loading{to{height:60px;box-shadow:0 0 #30b286}10%{box-shadow:0 -20px #30b286;height:80px}}body,html{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}html{background:-webkit-gradient(linear,left bottom,right top,from(#9e6e98),to(#4f6b79));background:-webkit-linear-gradient(bottom left,#9e6e98,#4f6b79);background:-o-linear-gradient(bottom left,#9e6e98,#4f6b79);background:linear-gradient(to top right,#9e6e98,#4f6b79)}body{background:-webkit-gradient(linear,left top,right bottom,from(rgba(81,97,120,.5)),to(rgba(89,74,117,.5)));background:-webkit-linear-gradient(top left,rgba(81,97,120,.5),rgba(89,74,117,.5));background:-o-linear-gradient(top left,rgba(81,97,120,.5),rgba(89,74,117,.5));background:linear-gradient(to bottom right,rgba(81,97,120,.5),rgba(89,74,117,.5))}.dash-board{background-color:rgba(38,38,46,.9);width:1000px;height:680px;color:#fff;border-radius:5px}.dash-board header .window-actions{padding:5px}.dash-board header .window-actions span{height:12px;width:12px;border-radius:50%;display:inline-block;margin-left:3px}.dash-board header .window-actions span:first-child{background-color:#ed6b60}.dash-board header .window-actions span:nth-child(2){background-color:#f6be4f}.dash-board header .window-actions span:nth-child(3){background-color:#62c655}.dash-board header .logo-and-contacts{border-bottom:3px solid #30b286;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:row;padding:0 15px 10px 8px}.dash-board header .logo-and-contacts .logo{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:row;flex:1;align-items:center}.dash-board header .logo-and-contacts .logo .icon{height:30px;width:30px;margin:0 10px;fill:#30b286}.dash-board header .logo-and-contacts .logo h1{font-size:24px}.dash-board header .logo-and-contacts .contacts{font-size:12px;color:#efefef}.dash-board header .logo-and-contacts .contacts,.dash-board header .logo-and-contacts .contacts span{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:center}.dash-board header .logo-and-contacts .contacts span a{color:#efefef}.dash-board header .logo-and-contacts .contacts .avatar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.dash-board header .logo-and-contacts .contacts .avatar .my-name{display:inline-block;margin:0 10px}.dash-board header .logo-and-contacts .contacts .avatar img{height:25px;width:25px;border-radius:50%}.dash-board header .logo-and-contacts .contacts .icon{height:20px;width:20px;fill:#30b286;margin:0 5px}.dash-board .interaction{padding:0 30px}.dash-board .interaction,.dash-board .interaction .list-of-songs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:column}.dash-board .interaction .list-of-songs .songList-container{flex-grow:1}.dash-board .interaction .list-of-songs .songList-container h3{padding:.5em 0;text-align:left;border:1px #767575;border-style:none none solid;margin-bottom:10px;font-weight:400;font-size:18px}.dash-board .interaction .list-of-songs .songList-container .song-list{height:195px;overflow:auto;border:1px solid transparent}.dash-board .interaction .list-of-songs .songList-container .song-list::-webkit-scrollbar{width:4px;height:4px}.dash-board .interaction .list-of-songs .songList-container .song-list::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}.dash-board .interaction .list-of-songs .songList-container .song-list::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:0;background:rgba(0,0,0,.1);margin:5px}.dash-board .interaction .list-of-songs .songList-container .song-list>li{height:30px;margin:0 10px 10px 0;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;flex-direction:row;font-size:14px}.dash-board .interaction .list-of-songs .songList-container .song-list>li.active>.song{background-color:hsla(0,0%,98%,.1)}.dash-board .interaction .list-of-songs .songList-container .song-list>li a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.dash-board .interaction .list-of-songs .songList-container .song-list>li a .play{height:2.2em;width:2.2em;fill:#30b286;transition:.2s}.dash-board .interaction .list-of-songs .songList-container .song-list>li a .play:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:space-between;align-items:center;border-radius:3px;height:100%;padding:0 10px;background-color:rgba(0,0,0,.3);flex:1;margin-left:10px}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .icon{height:1.5em;width:1.5em;margin-right:10px;fill:#30b286}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:center}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-actions .icon{cursor:pointer;transition:.2s}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-actions .icon:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:flex-start}.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-info .song-name,.dash-board .interaction .list-of-songs .songList-container .song-list>li .song .li-song-info .song-singer{width:180px}.dash-board .interaction .new-song-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:flex-end}.dash-board .interaction .new-song-wrapper .new-song-button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;height:35px;width:130px;font-size:12px;background-color:transparent;border:2px solid #0081a8;border-radius:20px;color:#ddd;justify-content:center;align-items:center;margin-top:10px;margin-bottom:30px;transition:.3s;cursor:pointer}.dash-board .interaction .new-song-wrapper .new-song-button:hover{background-color:rgba(0,0,0,.3)}.dash-board .interaction .edit-song-area{flex:1;justify-content:center;align-items:center;height:300px}.dash-board .interaction .edit-song-area .new-song-detail{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:center;align-items:center}.dash-board .interaction .edit-song-area .new-song-detail.hide{display:none}.dash-board .interaction .edit-song-area .new-song-detail h3{width:100%;padding:.5em 0;text-align:left;border:1px #767575;border-style:none none solid;font-weight:400;font-size:18px}.dash-board .interaction .edit-song-area .new-song-detail .form{width:100%}.dash-board .interaction .edit-song-area .new-song-detail .form .song-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between}.dash-board .interaction .edit-song-area .new-song-detail .form h3{padding:9px 0;margin-bottom:10px}.dash-board .interaction .edit-song-area .new-song-detail .form .row.actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:flex-end;margin-bottom:0}.dash-board .interaction .edit-song-area .new-song-detail .form .row.actions button{height:35px;width:130px;font-size:12px;background-color:transparent;border:2px solid #0081a8;border-radius:20px;color:#ddd;transition:.3s;cursor:pointer}.dash-board .interaction .edit-song-area .new-song-detail .form .row.actions button:hover{background-color:rgba(0,0,0,.3)}.dash-board .interaction .edit-song-area .new-song-detail .form .row{margin-bottom:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:flex-start}.dash-board .interaction .edit-song-area .new-song-detail .form .row label{color:#01b4ee}.dash-board .interaction .edit-song-area .new-song-detail .form .picture{border:1px solid #737174;height:170px;width:170px;background-color:rgba(0,0,0,.3)}.dash-board .interaction .edit-song-area .new-song-detail .form .left-rows{margin-left:33px;font-size:16px}.dash-board .interaction .edit-song-area .new-song-detail .form .left-rows label{margin-right:.5em;margin-top:3px}.dash-board .interaction .edit-song-area .new-song-detail .form .left-rows input{height:25px;width:255px;font-size:16px;font-family:Arial;color:#737174;border-radius:3px;background-color:rgba(0,0,0,.3);border:1px solid transparent;outline:#fff;padding:15px 10px}.dash-board .interaction .edit-song-area .new-song-detail .form .left-rows input:focus{border-color:#767575}.dash-board .interaction .edit-song-area .new-song-detail .form .right-row{margin-left:33px}.dash-board .interaction .edit-song-area .new-song-detail .form .right-row label{margin-right:.5em;margin-top:3px}.dash-board .interaction .edit-song-area .new-song-detail .form .right-row #song-lyrics{font-family:Arial;font-size:16px;color:#737174;border-radius:3px;background-color:rgba(0,0,0,.3);border:1px solid transparent;outline:#fff;width:320px;height:172px;padding:5px 10px}.dash-board .interaction .edit-song-area .new-song-detail .form .right-row #song-lyrics:focus{border-color:#767575}.dash-board .interaction .edit-song-area .upload-song{height:300px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;flex-direction:column}.dash-board .interaction .edit-song-area .upload-song.hide{display:none}.dash-board .interaction .edit-song-area .upload-song .loading-container{display:none;position:fixed;height:100vh;width:100vw;top:0;left:0;background-color:rgba(0,0,0,.5);z-index:2;justify-content:center;align-items:center}.dash-board .interaction .edit-song-area .upload-song .loading-container.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.dash-board .interaction .edit-song-area .upload-song .loading-container .loading{margin:50px auto;height:60px;width:10px;position:relative;background-color:#30b286;-webkit-animation:loading 1s infinite;animation:loading 1s infinite}.dash-board .interaction .edit-song-area .upload-song .loading-container .loading:before{content:\"\";background-color:#30b286;position:absolute;display:block;left:15px;top:-1px;height:60px;width:10px;-webkit-animation:loading 1s infinite;animation:loading 1s infinite;-webkit-animation-delay:.16s;animation-delay:.16s}.dash-board .interaction .edit-song-area .upload-song .loading-container .loading:after{content:\"\";position:absolute;display:block;left:30px;top:-1px;height:60px;width:10px;background-color:#30b286;-webkit-animation:loading 1s infinite;animation:loading 1s infinite;-webkit-animation-delay:.32s;animation-delay:.32s}.dash-board .interaction .edit-song-area .upload-song h3{padding:.5em 0;width:100%;text-align:left;border:1px #767575;border-style:none none solid;margin-bottom:20px;font-weight:400;font-size:18px}.dash-board .interaction .edit-song-area .upload-song #upload-song-area{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;border:3px dashed #737174;height:200px;width:100%;border-radius:20px;font-size:16px;color:#737174}.dash-board .interaction .edit-song-area .upload-song .upload-button-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;justify-content:flex-end}.dash-board .interaction .edit-song-area .upload-song .upload-button-wrapper #upload-button{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;height:35px;width:130px;font-size:12px;background-color:transparent;border:2px solid #0081a8;border-radius:20px;color:#ddd;justify-content:center;align-items:center;margin-top:10px;transition:.3s;cursor:pointer}.dash-board .interaction .edit-song-area .upload-song .upload-button-wrapper #upload-button:hover{background-color:rgba(0,0,0,.3)}", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=admin.js.map