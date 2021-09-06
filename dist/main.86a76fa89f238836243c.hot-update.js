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

/***/ "./src/components/home/HomePage.js":
/*!*****************************************!*\
  !*** ./src/components/home/HomePage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LandingHeroComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingHeroComp */ \"./src/components/home/LandingHeroComp.js\");\n/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sections */ \"./src/components/home/Sections.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../About */ \"./src/components/About.js\");\n/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Documents */ \"./src/components/Documents.js\");\n/* harmony import */ var _data_ContentData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/ContentData */ \"./src/components/data/ContentData.js\");\n/* harmony import */ var _data_poc_background_animation_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/poc-background-animation.json */ \"./src/components/data/poc-background-animation.json\");\n\n //components\n\n\n\n\n //data\n\n //lottie Background POC animation Data\n\n\n\nvar HomePage = function HomePage() {\n  console.log('Re-rendering Hoime Page =====>');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"home__wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    id: \"home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LandingHeroComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), _data_ContentData__WEBPACK_IMPORTED_MODULE_6__[\"default\"].map(function (articleData) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sections__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n      lottieAnimation: _data_poc_background_animation_json__WEBPACK_IMPORTED_MODULE_7__,\n      section: articleData\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    id: \"About\",\n    className: \"section__wrapper about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    id: \"Documents\",\n    className: \"section__wrapper documents\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Documents__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n/*\n  data.map(()=>(\n    <WtitePapper style=\"{{ backgroundColor: '#F0F0F0' }}\" id={props.hashlink} />\n  ))\n*/\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/HomePage.js?");

/***/ }),

/***/ "./src/components/home/Sections.js":
/*!*****************************************!*\
  !*** ./src/components/home/Sections.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './lottie/LottieWrapper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './WhitePaper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n //components\n\n\n\nfunction Section(props) {\n  // console.log('inside section ====>', props);\n  var lottiedata = {\n    animation: props.lottieAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: 1,\n      speed: 1,\n      play: true,\n      loop: true\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    id: props.section.id,\n    className: \"section__wrapper \".concat(props.section.style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './lottie/LottieWrapper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    animation: lottiedata.animation,\n    animationData: lottiedata.controlles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './WhitePaper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    whitePaper: props.section\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/Sections.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5cf3f433cc6dfc6f97ac")
/******/ })();
/******/ 
/******/ }
);