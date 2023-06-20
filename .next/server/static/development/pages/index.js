module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BookDetails.js":
/*!***********************************!*\
  !*** ./components/BookDetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "F:\\Next\\google-books\\components\\BookDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const BookDetails = props => {
  let title, imageLink, averageRating, ratingsCount, publishedDate, authors, pageCount, categories, language, description, pdfLink, webReaderLink;
  const {
    addBooklist
  } = props;
  // Set treatise to variables
  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(props.data)) {
    const {
      volumeInfo,
      accessInfo
    } = props.data;
    title = volumeInfo.title;
    if (volumeInfo.imageLinks !== undefined && !Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(volumeInfo.imageLinks)) {
      imageLink = volumeInfo.imageLinks.thumbnail;
    }
    averageRating = volumeInfo.averageRating;
    ratingsCount = volumeInfo.ratingsCount;
    publishedDate = volumeInfo.publishedDate;
    authors = volumeInfo.authors;
    pageCount = volumeInfo.pageCount;
    categories = volumeInfo.categories;
    language = volumeInfo.language;
    description = volumeInfo.description;
    if (accessInfo.pdf !== undefined && !Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(accessInfo.pdf)) {
      if (accessInfo.pdf.isAvailable) {
        pdfLink = accessInfo.pdf.acsTokenLink;
      }
    }
    webReaderLink = accessInfo.webReaderLink;
  }
  return __jsx("article", {
    className: "BookDetails",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, !Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(props.data) ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: imageLink !== undefined ? imageLink : './static/empty-cover.jpeg',
    thumbnail: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["BookRating"], {
    rating: averageRating,
    count: ratingsCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "BookDetails-Heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, title, publishedDate !== undefined && __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 50
    }
  }, " \u2013 ", __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
    date: new Date(publishedDate),
    format: "YYYY",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 59
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, authors !== undefined && authors.length > 0 && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["BookMeta"], {
    name: "Author",
    value: authors.join(', '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 66
    }
  }), pageCount !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["BookMeta"], {
    name: "Page number",
    value: pageCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 46
    }
  }), categories !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["BookMeta"], {
    name: "Category",
    value: categories,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 47
    }
  }), language !== undefined && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["BookMeta"], {
    name: "Language",
    value: _utils__WEBPACK_IMPORTED_MODULE_5__["languages"].filter(item => {
      return item.code === language;
    })[0].name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 45
    }
  })), description !== undefined && __jsx("p", {
    className: "BookDetails-Desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 46
    }
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["truncate"])(description, 500).replace(/<[^>]+>/g, '')), webReaderLink !== undefined && __jsx("a", {
    target: "_blink",
    href: webReaderLink,
    className: "btn btn-success mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBookOpen"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 20
    }
  }), "Read Now"), pdfLink !== undefined && __jsx("a", {
    target: "_blink",
    href: pdfLink,
    className: "btn btn-danger mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFilePdf"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 20
    }
  }), "Download PDF"), __jsx("button", {
    onClick: () => addBooklist(),
    className: "btn btn-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFolderPlus"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 16
    }
  }), "Add to Booklist"))) : __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Loading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 20
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BookDetails);

/***/ }),

/***/ "./components/BookListBar.js":
/*!***********************************!*\
  !*** ./components/BookListBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\Next\\google-books\\components\\BookListBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BookListBar = props => {
  const classNames = props.showBookListBar ? '' : 'hiddenListBar';
  const booklists = Array.from(props.booklist);
  const toggleBookListBar = props.toggleBookListBar;
  const isEmpty = obj => {
    return Object.keys(obj).length === 0;
  };
  return __jsx("div", {
    className: `Booklistbar ${classNames}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.showBookListBar && __jsx("div", {
    className: "BooklistbarHead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "BooklistbarHead-Gradient",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Favourite")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWindowClose"],
    onClick: toggleBookListBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), props.showBookListBar && booklists.length > 0 && __jsx("ul", {
    className: "Booklistbar-List shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, booklists.map(result => {
    const volumeInfo = result.volumeInfo;
    let imageLink = './static/empty-cover.jpeg';
    if (volumeInfo.imageLinks !== undefined && !isEmpty(volumeInfo.imageLinks)) {
      imageLink = volumeInfo.imageLinks.thumbnail;
    }
    return __jsx("li", {
      key: result.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: "6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: imageLink,
      thumbnail: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 41
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: "6",
      className: "title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 37
      }
    }, result.volumeInfo.title)));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (BookListBar);

/***/ }),

/***/ "./components/BookMeta.js":
/*!********************************!*\
  !*** ./components/BookMeta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Next\\google-books\\components\\BookMeta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BookMeta = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "BookDetails-Meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h6", {
    className: "BookDetails-Meta__Heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.name), __jsx("p", {
    className: "BookDetails-Meta__Content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, props.value)));
};
/* harmony default export */ __webpack_exports__["default"] = (BookMeta);

/***/ }),

/***/ "./components/BookRating.js":
/*!**********************************!*\
  !*** ./components/BookRating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Next\\google-books\\components\\BookRating.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RatingStars = () => {
  let starItems = [];
  for (let i = 0; i < 5; i++) {
    starItems.push(__jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      key: i,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 20
      }
    }));
  }
  return starItems;
};
const BookRating = props => {
  const {
    rating,
    count
  } = props;
  let divWidth = 0;
  if (rating > 0 && rating !== undefined) {
    divWidth = rating * 20.4;
  }
  return __jsx("div", {
    className: "BookDetails-Rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "BookDetails-Rating__Heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, rating > 0 && rating !== undefined ? rating : 0, __jsx("span", {
    className: "small text-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, " \u2013 ", count > 0 && count !== undefined ? count : 0, " ratings")), __jsx("div", {
    className: "BookDetails-Rating__Stars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "BookDetails-Rating__StarsWhite",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(RatingStars, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "BookDetails-Rating__StarsYellow",
    style: {
      width: `${divWidth}%`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "BookDetails-Rating__StarsYellow--Wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(RatingStars, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (BookRating);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Next\\google-books\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx("footer", {
    className: "Footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "Footer-Credit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "small text-light mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, "Developed by Andrii Tertychnyi @2023 . ", __jsx("a", {
    href: "https://www.linkedin.com/in/andriiter/",
    className: "text-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 56
    }
  }, "LinkedIn")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    fluid: true,
    src: "./static/google-logo.png",
    alt: "Powered by Google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "small text-white-50 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "Powered by Google"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "F:\\Next\\google-books\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => {
  const searchFocus = props.focusSearch ? '' : 'SearchFocus';
  const hiddenListBar = props.showBookListBar ? '' : 'hiddenListBar';
  return __jsx("div", {
    className: `PageWrapper ${searchFocus} ${hiddenListBar}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Popcorn Google Book Library"), __jsx("link", {
    rel: "icon",
    href: "./favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "Main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Next\\google-books\\components\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const Loading = () => {
  return __jsx("div", {
    className: "BookDetails-Loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "LdsEllipsis",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 36
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 47
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 58
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 69
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-debounce-input */ "react-debounce-input");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchItem */ "./components/SearchItem.js");
var _jsxFileName = "F:\\Next\\google-books\\components\\SearchBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SearchBar = props => {
  const {
    value,
    changeHandler,
    data,
    clickHandler,
    onFocus,
    onBlur,
    toggleBookListBar
  } = props;
  const handleFocus = () => {
    onFocus();
  };
  const handleBlur = () => {
    onBlur();
  };
  const handleToggleBookListBar = () => {
    toggleBookListBar();
  };
  return __jsx("div", {
    className: "PrimarySearch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"],
    className: "form-control__Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(react_debounce_input__WEBPACK_IMPORTED_MODULE_1__["DebounceInput"], {
    minLength: 3,
    debounceTimeout: 300,
    value: value,
    className: "form-control",
    placeholder: "Search for a book...",
    onChange: changeHandler,
    onFocus: handleFocus,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("div", {
    onClick: handleToggleBookListBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBook"],
    className: "form-control__ListIcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }))), data.length > 0 && __jsx("ul", {
    className: "PrimarySearch-Result shadow-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, data.map(result => __jsx("li", {
    key: result.id,
    onClick: () => clickHandler(result.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_SearchItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: result.volumeInfo.title,
    author: result.volumeInfo.authors && result.volumeInfo.authors,
    publisher: result.volumeInfo.publisher && result.volumeInfo.publisher,
    publishedDate: result.volumeInfo.publishedDate && result.volumeInfo.publishedDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/SearchItem.js":
/*!**********************************!*\
  !*** ./components/SearchItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Next\\google-books\\components\\SearchItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const SearchItem = props => {
  const {
    title,
    author,
    publisher,
    publishedDate
  } = props;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "searchItemTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, title), __jsx("div", {
    className: "searchItemDetail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, author && author.join(', ')), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, publisher && publisher, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 44
    }
  }, "  ", publishedDate && publishedDate))));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchItem);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Layout, SearchBar, BookDetails, BookMeta, BookRating, Footer, Loading, BookListBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BookDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookDetails */ "./components/BookDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookDetails", function() { return _BookDetails__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BookMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookMeta */ "./components/BookMeta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookMeta", function() { return _BookMeta__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _BookRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookRating */ "./components/BookRating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookRating", function() { return _BookRating__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _BookListBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BookListBar */ "./components/BookListBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookListBar", function() { return _BookListBar__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "F:\\Next\\google-books\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




const Homepage = () => {
  const {
    0: treatise,
    1: setTreatise
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    keyword: '',
    items: [],
    item: {}
  });
  const {
    0: booklist,
    1: setBookList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Set());
  const {
    0: showBookListBar,
    1: setShowBookListBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: focusSearch,
    1: setFocusSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toggleBookListBar = () => {
    setShowBookListBar(!showBookListBar); // Toggle the visibility
  };

  // Search book by keyword
  const searchHandler = e => {
    const keyword = e.target.value;
    if (keyword) {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`${"https://www.googleapis.com/books/v1"}/volumes?q=${keyword}&maxResults=5`).then(res => res.json()).then(data => {
        if (data.totalItems > 0) {
          setTreatise(_objectSpread({}, treatise, {
            keyword: keyword,
            items: data.items
          }));
        }
      }).catch(err => console.log(err));
    } else {
      setTreatise(_objectSpread({}, treatise, {
        items: []
      }));
    }
  };

  // Get specific treatise
  const getTreatiseHandler = id => {
    const {
      items
    } = treatise;
    const targetItem = items.filter(item => item.id === id)[0];
    setTreatise({
      keyword: '',
      items: [],
      item: targetItem
    });
  };
  const isEmptyObject = obj => {
    return Object.keys(obj).length === 0;
  };
  const addBooklist = () => {
    setBookList(prevBookList => new Set([...prevBookList, treatise.item])); // Update booklist as a new Set with added item
  };

  const handleFocus = () => {
    setFocusSearch(true);
  };
  const handleBlur = () => {
    setFocusSearch(false);
  };
  const {
    keyword,
    items,
    item
  } = treatise;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["BookListBar"], {
    showBookListBar: showBookListBar,
    booklist: booklist,
    toggleBookListBar: toggleBookListBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    showBookListBar: !showBookListBar,
    focusSearch: !focusSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: {
      span: 8,
      offset: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["SearchBar"], {
    value: keyword,
    data: items,
    booklist: booklist,
    changeHandler: searchHandler,
    clickHandler: getTreatiseHandler,
    onFocus: handleFocus,
    onBlur: handleBlur,
    toggleBookListBar: toggleBookListBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), isEmptyObject(item) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["BookDetails"], {
    data: item,
    addBooklist: addBooklist,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 46
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: isEmpty, truncate, languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
const isEmpty = obj => {
  return Object.keys(obj).length === 0;
};
const truncate = (source, size) => {
  return source.length > size ? source.slice(0, size - 1) + "..." : source;
};
const languages = [{
  code: 'af',
  name: 'Afrikaans'
}, {
  code: 'ga',
  name: 'Irish'
}, {
  code: 'sq',
  name: 'Albanian'
}, {
  code: 'it',
  name: 'Italian'
}, {
  code: 'ar',
  name: 'Arabic'
}, {
  code: 'ja',
  name: 'Japanese'
}, {
  code: 'az',
  name: 'Azerbaijani'
}, {
  code: 'kn',
  name: 'Kannada'
}, {
  code: 'eu',
  name: 'Basque'
}, {
  code: 'ko',
  name: 'Korean'
}, {
  code: 'bn',
  name: 'Bengali'
}, {
  code: 'la',
  name: 'Latin'
}, {
  code: 'be',
  name: 'Belarusian'
}, {
  code: 'lv',
  name: 'Latvian'
}, {
  code: 'bg',
  name: 'Bulgarian'
}, {
  code: 'lt',
  name: 'Lithuanian'
}, {
  code: 'ca',
  name: 'Catalan'
}, {
  code: 'mk',
  name: 'Macedonian'
}, {
  code: 'zh-CN',
  name: 'Chinese Simplified'
}, {
  code: 'ms',
  name: 'Malay'
}, {
  code: 'zh-TW',
  name: 'Chinese Traditional'
}, {
  code: 'mt',
  name: 'Maltese'
}, {
  code: 'hr',
  name: 'Croatian'
}, {
  code: 'no',
  name: 'Norwegian'
}, {
  code: 'cs',
  name: 'Czech'
}, {
  code: 'fa',
  name: 'Persian'
}, {
  code: 'da',
  name: 'Danish'
}, {
  code: 'pl',
  name: 'Polish'
}, {
  code: 'nl',
  name: 'Dutch'
}, {
  code: 'pt',
  name: 'Portuguese'
}, {
  code: 'en',
  name: 'English'
}, {
  code: 'ro',
  name: 'Romanian'
}, {
  code: 'eo',
  name: 'Esperanto'
}, {
  code: 'ru',
  name: 'Russian'
}, {
  code: 'et',
  name: 'Estonian'
}, {
  code: 'sr',
  name: 'Serbian'
}, {
  code: 'tl',
  name: 'Filipino'
}, {
  code: 'sk',
  name: 'Slovak'
}, {
  code: 'fi',
  name: 'Finnish'
}, {
  code: 'sl',
  name: 'Slovenian'
}, {
  code: 'fr',
  name: 'French'
}, {
  code: 'es',
  name: 'Spanish'
}, {
  code: 'gl',
  name: 'Galician'
}, {
  code: 'sw',
  name: 'Swahili'
}, {
  code: 'ka',
  name: 'Georgian'
}, {
  code: 'sv',
  name: 'Swedish'
}, {
  code: 'de',
  name: 'German'
}, {
  code: 'ta',
  name: 'Tamil'
}, {
  code: 'el',
  name: 'Greek'
}, {
  code: 'te',
  name: 'Telugu'
}, {
  code: 'gu',
  name: 'Gujarati'
}, {
  code: 'th',
  name: 'Thai'
}, {
  code: 'ht',
  name: 'Haitian Creole'
}, {
  code: 'tr',
  name: 'Turkish'
}, {
  code: 'iw',
  name: 'Hebrew'
}, {
  code: 'uk',
  name: 'Ukrainian'
}, {
  code: 'hi',
  name: 'Hindi'
}, {
  code: 'ur',
  name: 'Urdu'
}, {
  code: 'hu',
  name: 'Hungarian'
}, {
  code: 'vi',
  name: 'Vietnamese'
}, {
  code: 'is',
  name: 'Icelandic'
}, {
  code: 'cy',
  name: 'Welsh'
}, {
  code: 'id',
  name: 'Indonesian'
}, {
  code: 'yi',
  name: 'Yiddish'
}];

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Next\google-books\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-debounce-input":
/*!***************************************!*\
  !*** external "react-debounce-input" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-debounce-input");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map