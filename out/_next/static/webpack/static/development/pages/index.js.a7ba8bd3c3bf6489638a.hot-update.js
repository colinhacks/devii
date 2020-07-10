webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogPage.tsx":
/*!*********************************!*\
  !*** ./components/BlogPage.tsx ***!
  \*********************************/
/*! exports provided: BlogPost, MarkdownPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPage", function() { return MarkdownPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/lib/fecha.js");
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasePage */ "./components/BasePage.tsx");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Markdown */ "./components/Markdown.tsx");
var _this = undefined,
    _jsxFileName = "/Users/colinmcd94/Documents/Projects/onepotman/components/BlogPage.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var BlogPage = function BlogPage(_ref) {
  var post = _ref.post;
  return __jsx(_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(BlogPost, {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

var BlogPost = function BlogPost(_ref2) {
  var post = _ref2.post;
  var title = post.title,
      subtitle = post.subtitle,
      published = post.published,
      author = post.author,
      authorPhoto = post.authorPhoto;

  var authorData = __jsx("div", {
    style: {
      opacity: 0.6
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, author ? author : '', " "), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, published ? Object(fecha__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(published), 'MMMM Do, YYYY') : ''));

  return __jsx("div", {
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      padding: '0px 4vw'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '100px 0px 50px 0px'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: {
      margin: '10px 0px 10px 0px',
      padding: 0,
      border: 'none'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, title), subtitle && __jsx("h2", {
    style: {
      margin: '10px 0px',
      padding: 0,
      border: 'none',
      opacity: '0.6'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, subtitle), __jsx("hr", {
    style: {
      height: '1px',
      color: '#eee',
      opacity: 0.2,
      margin: '15px 0px'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      // opacity: 0.6,
      margin: '0px',
      padding: '0px' // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignItems: 'flex-start',

    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      // opacity: 0.6,
      margin: '0px',
      padding: '0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: authorPhoto,
    style: {
      width: '50px',
      height: '50px',
      borderRadius: '25px',
      margin: '0px 10px 0px 0px'
    },
    className: "jsx-2424488547",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }), authorData))), __jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2424488547",
    __self: _this
  }, "p,li{line-height:1.7;}h1,h2{margin-top:40px;padding-bottom:7px;border-bottom:1px solid #eee;}h1,h2,,h3,h4,h5,h6{margin:0px;padding:0px;}h1>a,h2>a,h3>a,h4>a,h5>a,h6>a{-webkit-text-decoration:none;text-decoration:none;}hr{margin:20px 0px;opacity:0.35;}h1{padding-top:30px;padding-bottom:10px;margin-top:30px;margin-bottom:30px;}h2{padding-top:25px;padding-bottom:10px;margin-top:25px;margin-bottom:25px;}h3{padding-top:20px;padding-bottom:10px;margin-top:20px;margin-bottom:20px;}h4{padding-top:15px;padding-bottom:10px;margin-top:15px;margin-bottom:15px;}h5{padding-top:10px;padding-bottom:10px;margin-top:10px;margin-bottom:10px;}h6{padding-top:5px;padding-bottom:10px;margin-top:5px;margin-bottom:5px;}p{padding:10px 0px;margin:10px 0px;}li{margin:0px 0px;}img{width:100%;border-radius:8px;box-shadow:0px 4px 30px #00000040;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2xpbm1jZDk0L0RvY3VtZW50cy9Qcm9qZWN0cy9vbmVwb3RtYW4vY29tcG9uZW50cy9CbG9nUGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0h5QixBQUkyQixBQUtBLEFBV0wsQUFTVSxBQUdMLEFBSUMsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQU1ELEFBTUMsQUFJRixBQUdKLFdBMURDLEFBMkRNLElBSHBCLENBeEVBLEFBS3FCLEFBdUJOLEFBa0NPLENBOUJBLEFBTUEsQUFNQSxBQU1BLEFBTUEsQUFZSixNQW5EbEIsTUFZQSxBQStDb0MsSUFQcEMsRUEvRCtCLENBeURkLENBOUJDLEFBTUEsQUFNQSxBQU1BLEFBTUEsYUFoQ2xCLENBdUNvQixFQTlCQyxBQU1BLEFBTUEsQUFNQSxBQU1BLFVBbUJyQixDQXRFQSxLQTBEQSxHQTlCQSxBQU1BLEFBTUEsQUFNQSxBQU1BIiwiZmlsZSI6Ii9Vc2Vycy9jb2xpbm1jZDk0L0RvY3VtZW50cy9Qcm9qZWN0cy9vbmVwb3RtYW4vY29tcG9uZW50cy9CbG9nUGFnZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2ZlY2hhJztcblxuaW1wb3J0IEJhc2VQYWdlIGZyb20gJy4vQmFzZVBhZ2UnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4vTWFya2Rvd24nO1xuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tICcuLi9sb2FkZXInO1xuXG5jb25zdCBCbG9nUGFnZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e1xuICBwb3N0OiBQb3N0RGF0YTtcbn0+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJhc2VQYWdlPlxuICAgICAgPEJsb2dQb3N0IHBvc3Q9e3Bvc3R9IC8+XG4gICAgPC9CYXNlUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBwb3N0OiBQb3N0RGF0YSB9PiA9ICh7XG4gIHBvc3QsXG59KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBwdWJsaXNoZWQsIGF1dGhvciwgYXV0aG9yUGhvdG8gfSA9IHBvc3Q7XG5cbiAgY29uc3QgYXV0aG9yRGF0YSA9IChcbiAgICA8ZGl2IHN0eWxlPXt7IG9wYWNpdHk6IDAuNiB9fT5cbiAgICAgIDxzcGFuPnthdXRob3IgPyBhdXRob3IgOiAnJ30gPC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHtwdWJsaXNoZWQgPyBmb3JtYXQobmV3IERhdGUocHVibGlzaGVkKSwgJ01NTU0gRG8sIFlZWVknKSA6ICcnfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMHB4IDR2dycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc2MDBweCcgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMDBweCAwcHggNTBweCAwcHgnIH19PlxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCAwcHggMTBweCAwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxcHgnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2VlZScsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzE1cHggMHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAwLjYsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgLy8gZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAvLyBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yUGhvdG99XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwcHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCAxMHB4IDBweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHthdXRob3JEYXRhfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBwLFxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQsXG4gICAgICAgIGg1LFxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxID4gYSxcbiAgICAgICAgaDIgPiBhLFxuICAgICAgICBoMyA+IGEsXG4gICAgICAgIGg0ID4gYSxcbiAgICAgICAgaDUgPiBhLFxuICAgICAgICBoNiA+IGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBociB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM1O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggIzAwMDAwMDQwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFya2Rvd25QYWdlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IHBvc3Q6IFBvc3REYXRhIH0+ID0gKHtcbiAgcG9zdCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmxvZ1BhZ2UgcG9zdD17cG9zdH0+XG4gICAgICA8TWFya2Rvd24gc291cmNlPXtwb3N0LmNvbnRlbnQgfHwgJyMjIDQwNCBOb3QgRm91bmQnfSAvPlxuICAgIDwvQmxvZ1BhZ2U+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/colinmcd94/Documents/Projects/onepotman/components/BlogPage.tsx */"));
};
var MarkdownPage = function MarkdownPage(_ref3) {
  var post = _ref3.post;
  return __jsx(BlogPage, {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, __jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: post.content || '## 404 Not Found',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

/***/ })

})
//# sourceMappingURL=index.js.a7ba8bd3c3bf6489638a.hot-update.js.map