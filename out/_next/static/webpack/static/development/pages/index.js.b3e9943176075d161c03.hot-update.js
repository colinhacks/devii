webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.tsx");
var _this = undefined,
    _jsxFileName = "/Users/colinmcd94/Documents/Projects/devii/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home(props) {
  return __jsx("div", {
    style: {
      width: '100%',
      padding: '0px 10vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Introducing Devii"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      padding: '50px 0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "My blog posts"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Any new markdown file under ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, "/md/blog"), " will automatically appear here."), __jsx("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gridRowGap: '8px',
      gridColumnGap: '8px',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, props.posts.map(function (post, j) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["PostCard"], {
      post: post,
      key: j,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 22
      }
    });
  })))), __jsx("div", {
    style: {
      maxWidth: '600px',
      margin: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      textAlign: center
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "README.md"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Imported and rendered using Next.js dynamic imports \uD83C\uDF89"), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_3__["Markdown"], {
    source: props.readme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b3e9943176075d161c03.hot-update.js.map