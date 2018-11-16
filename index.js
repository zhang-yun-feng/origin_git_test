// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/renhuanshan/NewFirst/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-06ce1c10"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "main": {
    "flexDirection": "column",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD",
    "marginTop": "1",
    "marginRight": "1",
    "marginBottom": "1",
    "marginLeft": "1"
  },
  "nav": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "alignContent": "center",
    "marginTop": "1",
    "marginRight": "1",
    "marginBottom": "1",
    "marginLeft": "1"
  },
  "button": {
    "display": "flex",
    "width": "245",
    "height": "245",
    "backgroundColor": "#FFFFFF",
    "alignContent": "center",
    "alignItems": "center",
    "marginTop": "1",
    "marginRight": "1",
    "marginBottom": "1",
    "marginLeft": "1"
  },
  "icon": {
    "marginTop": 30,
    "width": 120,
    "height": 120
  },
  "title": {
    "width": 120,
    "height": 120,
    "textAlign": "center",
    "fontSize": "28",
    "marginTop": 20,
    "color": "#A9A9A9"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      shortmsg_icon: 'xcassets:shortMessage_icon',
      addressbook_icon: 'xcassets:addressbook_icon',
      syllabus_icon: 'xcassets:syllabus_icon',
      classSpace_icon: 'xcassets:classSpace_icon',
      exam_icon: 'xcassets:exam_icon',
      scoreManage: 'xcassets:scoreManage',
      workMessage: 'xcassets:workMessage'
    };
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('div', {
    staticClass: ["nav"]
  }, [_c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.shortmsg_icon
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("短信")])]), _c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.addressbook_icon
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("通讯录")])]), _c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.syllabus_icon
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("课程表")])])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.classSpace_icon
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("班级空间")])]), _c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.exam_icon
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("考试管理")])]), _c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.scoreManage
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("成绩管理")])])]), _c('div', {
    staticClass: ["nav"]
  }, [_c('div', {
    staticClass: ["button"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.workMessage
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("办公短信")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);