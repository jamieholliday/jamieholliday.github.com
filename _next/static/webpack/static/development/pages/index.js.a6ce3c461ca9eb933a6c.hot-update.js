webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper.js");
/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/styles */ "./helpers/styles.js");
var _jsxFileName = "/Users/jamieholliday/Documents/jamieholliday.com/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import summary from '../content/summary';





var S_h1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__S_h1",
  componentId: "sc-1cl0c4r-0"
})(["margin-bottom:20px;"]); // const S_h2 = styled.h2`
//   margin-bottom: 20px;
// `;
// const S_div_about = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 50px;
//   ${media.sm`
//     flex-direction: row
//   `};
// `;
// const S_div_profile = styled.div`
//   margin-bottom: 20px;
//   width: 300px;
//   height: 300px;
//   align-self: center;
//   flex: 1;
//   ${media.sm`
//     margin: 0 20px 0 0;
//     width: 150px;
//     height: 150px;
//   `};
// `;
// const S_img_profile = styled.img`
//   border: 5px solid ${colours.darkBlue};
//   border-radius: 50%;
//   width: 300px;
//   height: 300px;
//   ${media.sm`
//     min-width: 150px;
//     width: 150px;
//     height: 150px;
//   `};
// `;
// const S_div_copy = styled.div`
//   ${media.sm`padding-top: 30px;`};
// `;
// const S_ul_portfolio_items = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 0 -5px 20px;
//   ${media.sm`
//     justify-content: space-between
//   `};
// `;
// const S_img_portfolio_item = styled.img`
//   max-width: 330px;
//   width: 100%;
//   margin: 5px;
//   border: 3px solid #f1f1f1;
// `;
// const S_img_portfolio_main = styled.img`
//   width: 100%;
//   margin-bottom: 20px;
// `;
// const portfolio = [
//   { alt: 'Nokia screenshot', img: 'screen2.jpg' },
//   { alt: 'Ignition screenshot', img: 'screen3.jpg' },
//   { alt: 'JCC screenshot', img: 'screen4.jpg' },
//   { alt: 'Jaguar Landrover screenshot', img: 'screen6.jpg' },
//   { alt: 'Pavers screenshot', img: 'screen7.jpg' },
//   { alt: 'IJP screenshot', img: 'screen8.jpg' },
//   { alt: 'PoP screenshot', img: 'screen9.jpg' },
//   { alt: 'Bauhaus Kids screenshot', img: 'screen10.jpg' },
//   { alt: 'Victoria Dashboard screenshot', img: 'screen11.jpg' },
// ];

var renderAbout = function renderAbout() {
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(S_div_about, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(S_div_profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(S_img_profile, {
    src: "/images/jamie.jpg",
    alt: "Jamie Holliday",
    width: "150",
    height: "150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(S_div_copy, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\n          I'm Jamie. I currenty work for{' '}\n            <a href=\"http://www.myjobmatcher.com\">MyJobMatcher</a> as a Lead\n            Front End Developer. My daily work involves building apps focussed\n            on matching users to their perfect job and helping recruiters find\n            relevant hires, as well as the development of internal tools\n          "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "\n          I work 100% remotely. I'm very happy and productive with this\n            setup. The ratrace commute is not for me thanks.\n          "))));
}; // const renderPortfolio = () => {
//   return (
//     <section>
//       <S_h2>Portfolio</S_h2>
//       <p>
//         I have worked on a number of Front End projects in various product and
//         agency environments, for brands such as Agent Provocateur, Polarn O
//         Pyret, Bauhaus, Nokia, Toyota, Jaguar LandRover, Honda, Nissan, L'Oréal,
//         Lexus &amp; Yamaha.
//       </p>
//       <S_img_portfolio_main
//         alt="MJM uk screenshot"
//         src="/images/screen15.jpg"
//       />
//       <S_ul_portfolio_items>
//         {portfolio.map(item => (
//           <li key={item.alt}>
//             <S_img_portfolio_item src={`/images/${item.img}`} alt={item.alt} />
//           </li>
//         ))}
//       </S_ul_portfolio_items>
//     </section>
//   );
// };
// const renderTools = () => {
//   return (
//     <section>
//       <S_h2>Tools</S_h2>
//       <p>
//         I try and stay up to date with the ever changing Front End techniques
//         and technologies. My current favourite tech stack would include React,
//         Redux, Node, Webpack, ES6, Jest.
//       </p>
//     </section>
//   );
// };


var Home = function Home() {
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Jamie Holliday"), __jsx("meta", {
    name: "description",
    content: "Javascript developer using react, redux",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), __jsx(S_h1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Jamie Holliday"), renderAbout());
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a6ce3c461ca9eb933a6c.hot-update.js.map