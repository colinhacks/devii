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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    className: "jsx-79856072",
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
    id: "79856072",
    __self: _this
  }, "p,li{line-height:1.7;}h1,h2{margin-top:40px;padding-bottom:7px;border-bottom:1px solid #eee;}h1,h2,,h3,h4,h5,h6{margin:0px;padding:0px;}h1>a,h2>a,h3>a,h4>a,h5>a,h6>a{-webkit-text-decoration:none;text-decoration:none;}hr{margin:20px 0px;opacity:0.35;}h1{padding-top:30px;padding-bottom:10px;margin-top:30px;margin-bottom:30px;}h2{padding-top:25px;padding-bottom:10px;margin-top:25px;margin-bottom:25px;}h3{padding-top:20px;padding-bottom:10px;margin-top:20px;margin-bottom:20px;}h4{padding-top:15px;padding-bottom:10px;margin-top:15px;margin-bottom:15px;}h5{padding-top:10px;padding-bottom:10px;margin-top:10px;margin-bottom:10px;}h6{padding-top:5px;padding-bottom:10px;margin-top:5px;margin-bottom:5px;}p{padding:10px 0px;margin:10px 0px;}li{margin:0px 0px;}img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2xpbm1jZDk0L0RvY3VtZW50cy9Qcm9qZWN0cy9vbmVwb3RtYW4vY29tcG9uZW50cy9CbG9nUGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0h5QixBQUkyQixBQUtBLEFBV0wsQUFTVSxBQUdMLEFBSUMsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQU1ELEFBTUMsQUFJRixBQUdKLFdBMURDLEFBMkRkLElBSEEsQ0F4RUEsQUFLcUIsQUF1Qk4sQUFrQ08sQ0E5QkEsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQVlKLE1BbkRsQixNQVlBLElBd0NBLEVBL0QrQixDQXlEZCxDQTlCQyxBQU1BLEFBTUEsQUFNQSxBQU1BLGFBaENsQixDQXVDb0IsRUE5QkMsQUFNQSxBQU1BLEFBTUEsQUFNQSxXQW5EckIsS0EwREEsR0E5QkEsQUFNQSxBQU1BLEFBTUEsQUFNQSIsImZpbGUiOiIvVXNlcnMvY29saW5tY2Q5NC9Eb2N1bWVudHMvUHJvamVjdHMvb25lcG90bWFuL2NvbXBvbmVudHMvQmxvZ1BhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdmZWNoYSc7XG5cbmltcG9ydCBCYXNlUGFnZSBmcm9tICcuL0Jhc2VQYWdlJztcbmltcG9ydCBNYXJrZG93biBmcm9tICcuL01hcmtkb3duJztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vbG9hZGVyJztcblxuY29uc3QgQmxvZ1BhZ2U6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcG9zdDogUG9zdERhdGE7XG59PiA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCYXNlUGFnZT5cbiAgICAgIDxCbG9nUG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgIDwvQmFzZVBhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQmxvZ1Bvc3Q6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgcG9zdDogUG9zdERhdGEgfT4gPSAoe1xuICBwb3N0LFxufSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgcHVibGlzaGVkLCBhdXRob3IsIGF1dGhvclBob3RvIH0gPSBwb3N0O1xuXG4gIGNvbnN0IGF1dGhvckRhdGEgPSAoXG4gICAgPGRpdiBzdHlsZT17eyBvcGFjaXR5OiAwLjYgfX0+XG4gICAgICA8c3Bhbj57YXV0aG9yID8gYXV0aG9yIDogJyd9IDwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7cHVibGlzaGVkID8gZm9ybWF0KG5ldyBEYXRlKHB1Ymxpc2hlZCksICdNTU1NIERvLCBZWVlZJykgOiAnJ31cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcGFkZGluZzogJzBweCA0dncnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNjAwcHgnIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTAwcHggMHB4IDUwcHggMHB4JyB9fT5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMHB4IDEwcHggMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge3N1YnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMHB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGhyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMXB4JyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlZWUnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMixcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcxNXB4IDBweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCcsXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIC8vIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgLy8gYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2F1dGhvclBob3RvfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHggMTBweCAwcHggMHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YXV0aG9yRGF0YX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxNYXJrZG93biBzb3VyY2U9e3Bvc3QuY29udGVudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgcCxcbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgIH1cblxuICAgICAgICBoMSxcbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgICxcbiAgICAgICAgaDMsXG4gICAgICAgIGg0LFxuICAgICAgICBoNSxcbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSA+IGEsXG4gICAgICAgIGgyID4gYSxcbiAgICAgICAgaDMgPiBhLFxuICAgICAgICBoNCA+IGEsXG4gICAgICAgIGg1ID4gYSxcbiAgICAgICAgaDYgPiBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgaHIge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMC4zNTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmtkb3duUGFnZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBwb3N0OiBQb3N0RGF0YSB9PiA9ICh7XG4gIHBvc3QsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJsb2dQYWdlIHBvc3Q9e3Bvc3R9PlxuICAgICAgPE1hcmtkb3duIHNvdXJjZT17cG9zdC5jb250ZW50IHx8ICcjIyA0MDQgTm90IEZvdW5kJ30gLz5cbiAgICA8L0Jsb2dQYWdlPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/colinmcd94/Documents/Projects/onepotman/components/BlogPage.tsx */"));
};
var MarkdownPage = function MarkdownPage(_ref3) {
  var post = _ref3.post;
  return __jsx(BlogPage, {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, __jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: post.content || '## 404 Not Found',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

/***/ })

})
//# sourceMappingURL=index.js.0067f25665f2c9e53b04.hot-update.js.map