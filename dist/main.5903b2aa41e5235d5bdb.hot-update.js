"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateizzy_shams_proj"]("main",{

/***/ "./src/components/home/LandingHeroComp.js":
/*!************************************************!*\
  !*** ./src/components/home/LandingHeroComp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lottie/LottieWrapper */ \"./src/components/lottie/LottieWrapper.js\");\n\n\n\nfunction LandingHero(props) {\n  var lottiedataObic = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 1,\n      play: true,\n      loop: true\n    }\n  };\n  var lottiedataTldnr = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 0.5,\n      play: false,\n      loop: true\n    }\n  };\n  var lottiedataHapMap = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 0.5,\n      play: false,\n      loop: true\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"landing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: 'landing__wrapper'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    animation: lottiedataObic.obicAnim,\n    animationData: lottiedataObic.controlles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    animation: lottiedataTldnr.obicAnim,\n    animationData: lottiedataTldnr.controlles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    animation: lottiedataHapMap.obicAnim,\n    animationData: lottiedataHapMap.controlles\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory hide\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle one\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"understand\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle two\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"observe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle three\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"POV\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle four\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"ideate\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle five\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"prototype\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle six\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"test\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle seven\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"story telling\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle eight\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"piolt\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle nine\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"busines model\"))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingHero);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/LandingHeroComp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("660ff37fd041e6e82441")
/******/ })();
/******/ 
/******/ }
);