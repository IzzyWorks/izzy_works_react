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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lottie/LottieWrapper */ \"./src/components/lottie/LottieWrapper.js\");\n\n // import landingAnimationData from '../data/LandingAnimationData';\n\nfunction LandingHero(props) {\n  console.log('inside landing Hero', props);\n  var lottiedataObic = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 1,\n      play: true,\n      loop: true\n    }\n  };\n  var lottiedataTldnr = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 0.5,\n      play: false,\n      loop: true\n    }\n  };\n  var lottiedataHapMap = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicHomeAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 0.5,\n      play: false,\n      loop: true\n    }\n  };\n  console.log('props inside landging page', props); // const handleClick = (props, e) => {\n  //   // console.log('inside eventhandler ===>', props);\n  //   setSpeed(landingAnimationData.speed),\n  //     setOnHover(landingAnimationData.onHover),\n  //     setOnClick(landingAnimationData.onClick);\n  // };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"landing\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: 'landing__wrapper'\n  }, animationData.map(function (animations) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: animations.key,\n      animation: lottiedataObic.obicAnim,\n      animations: animations,\n      animationData: lottiedataObic.controlles\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory hide\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle one\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"understand\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle two\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"observe\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle three\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"POV\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle four\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"ideate\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle five\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"prototype\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle six\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"test\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"circle--segment\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"circle--catagory\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle seven\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"story telling\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle eight\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"piolt\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle nine\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"circle--subtitle\"\n  }, \"busines model\"))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingHero); // const [frames, setFrames] = useState([0, 1]);\n// const [speed, setSpeed] = useState([0]);\n// const [onHover, setOnHover] = useState([0, 1]);\n// const [onClick, setOnClick] = useState([0, 1]);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/LandingHeroComp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f028b2013f8c425193d4")
/******/ })();
/******/ 
/******/ }
);