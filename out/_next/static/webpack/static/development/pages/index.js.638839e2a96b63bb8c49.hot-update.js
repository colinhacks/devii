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
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ "./globals.ts");
var _this = undefined,
    _jsxFileName = "/Users/colinmcd94/Documents/Projects/devii/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Home = function Home(props) {
  return __jsx("div", {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Introducing Devii"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      width: '100%',
      padding: '100px 10vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      margin: '4px 0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "My blog posts"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Any new markdown file under ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 31,
      columnNumber: 11
    }
  }, props.posts.map(function (post, j) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["PostCard"], {
      post: post,
      key: j,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 22
      }
    });
  })))), __jsx("div", {
    style: {
      width: '100%',
      margin: '100px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Testimonials"), __jsx("blockquote", {
    style: {
      borderLeft: "3px solid ".concat(_globals__WEBPACK_IMPORTED_MODULE_4__["config"].accentColor),
      paddingLeft: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      fontSize: '16pt'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Seems like it might be useful!")), __jsx("p", {
    style: {
      fontSize: '14pt',
      textAlign: 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "\u2014 Dan Abramov, taken", ' ', __jsx("a", {
    href: "https://github.com/vriad/devii",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "utterly out of context")))), __jsx("div", {
    style: {
      width: '100%',
      margin: '100px 0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "README.md"), __jsx("p", {
    style: {
      textAlign: 'center',
      maxWidth: '600px',
      margin: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Below is the README.md for devii. It was imported and rendered using Next.js dynamic imports. The rest of this page (including this paragraph) are rendered with React. \uD83C\uDF89")), __jsx("div", {
    style: {
      width: '100%',
      backgroundColor: '#eeeeee',
      paddingBottom: '50px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      maxWidth: '600px',
      margin: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_3__["Markdown"], {
    source: props.readme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.638839e2a96b63bb8c49.hot-update.js.map