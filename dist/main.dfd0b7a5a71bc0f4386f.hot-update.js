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

/***/ "./src/components/WhitePaper.js":
/*!**************************************!*\
  !*** ./src/components/WhitePaper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _global_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/Title */ \"./src/components/global/Title.js\");\n/* harmony import */ var _global_Synopsis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/Synopsis */ \"./src/components/global/Synopsis.js\");\n/* harmony import */ var _global_DetailsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/DetailsCard */ \"./src/components/global/DetailsCard.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n //components\n\n\n\n\n\nfunction WhitePaper(props) {\n  console.log('whitepaper ===>', props);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      animateClass = _useState2[0],\n      setAnimateClass = _useState2[1];\n\n  var pagePositionNScroll = {\n    1: \"Home\",\n    2: \"OBIC\"\n  };\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // setTimeout(()=>{\n    //   let animationclasses = animateClass.concat(' targetAnimation');\n    //   console.log(\"In Use effect after 3 Seconds ====>\")\n    //   setAnimateClass(animationclasses);\n    // },5000);\n    document.addEventListener('scroll', onScrollHandler);\n  });\n\n  var onScrollHandler = function onScrollHandler(e) {\n    var el = window;\n    var widthNHeightObj = {\n      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n    };\n    console.log(\"widthNHeightObj ===>\", widthNHeightObj);\n    console.log(\"786 ===>\", Math.ceil(widthNHeightObj.y / document.body.clientHeight));\n\n    if (widthNHeightObj.y % document.body.clientHeight) {//history.push('#OBIC');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", {\n    onScroll: onScrollHandler,\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    className: \"article__wrapper \".concat(props.whitePaper.style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_Title__WEBPACK_IMPORTED_MODULE_2__.default, {\n    articleTitle: props.whitePaper.id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_Synopsis__WEBPACK_IMPORTED_MODULE_3__.default, {\n    articleSynopsis: props.whitePaper.synopsis\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_DetailsCard__WEBPACK_IMPORTED_MODULE_4__.default, {\n    articleDetails: props.whitePaper.details\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhitePaper);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/WhitePaper.js?");

/***/ }),

/***/ "./src/components/global/DetailsAuthors.js":
/*!*************************************************!*\
  !*** ./src/components/global/DetailsAuthors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Authors(props) {\n  // console.log('Props +++==>', props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"authors-section\"\n  }, props.authors.map(function (author) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n      className: \"authors-wrapping\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"author-name\"\n    }, author.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"author-roll\"\n    }, author.roll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"author-contact\"\n    }, author.contact));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authors);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/DetailsAuthors.js?");

/***/ }),

/***/ "./src/components/global/DetailsCard.js":
/*!**********************************************!*\
  !*** ./src/components/global/DetailsCard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DetailsAuthors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsAuthors */ \"./src/components/global/DetailsAuthors.js\");\n/* harmony import */ var _DetailsSources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsSources */ \"./src/components/global/DetailsSources.js\");\n/* harmony import */ var _DetailsTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsTools */ \"./src/components/global/DetailsTools.js\");\n\n //componenets\n\n\n\n\n\nfunction Details(props) {\n  // console.log('details ===>', props.articleDetails);\n  // console.log('authors ===>', props.articleDetails.authors);\n  var authorsArr = props.articleDetails.authors;\n  var sourcesArr = props.articleDetails.sources;\n  var toolsArr = props.articleDetails.tools;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailsAuthors__WEBPACK_IMPORTED_MODULE_2__.default, {\n    authors: authorsArr\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"details-date\"\n  }, props.articleDetails.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"details-length\"\n  }, props.articleDetails.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailsSources__WEBPACK_IMPORTED_MODULE_3__.default, {\n    sources: sourcesArr\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailsTools__WEBPACK_IMPORTED_MODULE_4__.default, {\n    tools: toolsArr\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/DetailsCard.js?");

/***/ }),

/***/ "./src/components/global/DetailsSources.js":
/*!*************************************************!*\
  !*** ./src/components/global/DetailsSources.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Sources(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sources-section\"\n  }, props.sources.map(function (source) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n      className: \"sources-wrapping\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"sources-title\"\n    }, source.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"sources-link\"\n    }, source.src));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sources);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/DetailsSources.js?");

/***/ }),

/***/ "./src/components/global/DetailsTools.js":
/*!***********************************************!*\
  !*** ./src/components/global/DetailsTools.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Tools(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"tools-section\"\n  }, props.tools.map(function (tool) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n      className: \"tool-wrapping\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"tool-name\"\n    }, tool.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"tool-img\"\n    }, tool.img));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/DetailsTools.js?");

/***/ }),

/***/ "./src/components/global/Synopsis.js":
/*!*******************************************!*\
  !*** ./src/components/global/Synopsis.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Synopsis(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"synopsis-wrapping\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"synopsis-header\"\n  }, props.articleSynopsis.header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"synopsis-text\"\n  }, props.articleSynopsis.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"synopsis-img\"\n  }, props.articleSynopsis.img)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Synopsis);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/Synopsis.js?");

/***/ }),

/***/ "./src/components/global/Title.js":
/*!****************************************!*\
  !*** ./src/components/global/Title.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Title(props) {\n  var classes = props.classes;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, console.log(\"Re-rendering.....\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, props.articleTitle));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/Title.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44fcd5bcf60bdb5cc1fb")
/******/ })();
/******/ 
/******/ }
);