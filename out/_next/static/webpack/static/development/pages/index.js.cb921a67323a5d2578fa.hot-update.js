webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return PostCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/lib/fecha.js");
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tag */ "./components/Tag.tsx");
var _this = undefined,
    _jsxFileName = "/Users/colinmcd94/Documents/Projects/devii/components/PostCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostCard = function PostCard(props) {
  var post = props.post;
  return __jsx("a", {
    href: "/".concat(post.path),
    style: {
      textDecoration: 'inherit',
      color: 'inherit',
      margin: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '300px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      // flexBasis: '300px',
      // flex: 1,
      // minWidth: '200px',
      // maxWidth: '450px',
      opacity: 0.92,
      boxShadow: '0px 2px 10px #00000040',
      width: '100%',
      maxWidth: '500px',
      overflow: 'hidden',
      borderRadius: '8px',
      // boxShadow: '0px 2px 10px #00000020',
      display: 'flex',
      flexDirection: 'column',
      height: '100%' // margin: '10px 0px',

    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, post.thumbnailPhoto && __jsx("div", {
    style: {
      background: "url(".concat(post.thumbnailPhoto, ") no-repeat center center"),
      backgroundSize: 'cover',
      // backgroundImage: post.thumb_image,
      // backgroundPosition: 'cover',
      width: '100%',
      flex: 1 // height: '200px',

    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      padding: '15px 10px',
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid #00000020'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, post.title && __jsx("h2", {
    style: {
      margin: '0px 0px 7px 0px',
      // padding: '2px 0px 2px 0px',
      fontSize: '14pt',
      fontWeight: 600,
      padding: '2px 10%',
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, post.title),  false && false, __jsx("p", {
    style: {
      opacity: 0.6,
      textAlign: 'center',
      margin: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, props.post.datePublished ? Object(fecha__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''), __jsx("div", {
    style: {
      flex: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, " "),  false && false)));
};

/***/ })

})
//# sourceMappingURL=index.js.cb921a67323a5d2578fa.hot-update.js.map