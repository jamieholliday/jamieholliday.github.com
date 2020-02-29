webpackHotUpdate("static/development/pages/bucket-list.js",{

/***/ "./pages/bucket-list.js":
/*!******************************!*\
  !*** ./pages/bucket-list.js ***!
  \******************************/
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
var _jsxFileName = "/Users/jamieholliday/Documents/jamieholliday.com/pages/bucket-list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-unescaped-entities */




var S_h1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "bucket-list__S_h1",
  componentId: "xe3zfg-0"
})(["margin-bottom:20px;"]);
var S_div_list = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "bucket-list__S_div_list",
  componentId: "xe3zfg-1"
})(["margin-top:40px;"]);
var S_ol = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "bucket-list__S_ol",
  componentId: "xe3zfg-2"
})(["padding-left:35px;li{margin-bottom:5px;list-style:decimal;}"]);
var todo = ['Stand under a waterfall', 'Catch a wave surfing', 'Mush a dog sled', 'Do a Backflip', 'Go Fatbiking', 'Go in a submarine', 'Drive a tank', 'Drive a rally car', 'Drive a supercar', 'Fly in a helicopter', 'Walk a rope bridge', 'Zorbing', 'Feed/Wash an elephant', 'Climb a volcano', 'Relax in a natural hot spring', 'Sleep in an igloo', 'Visit the ice hotel', 'Start a fire by rubbing sticks together', 'See the northern lights', 'Live by the sea', 'Meet someone famous - (not sure who yet)', 'Have a book published', 'Create a family tree', 'Make pottery on a wheel', 'Be in a TV show audience', 'Be an extra in a film', 'Fly first/business class', 'See a ted talk live', 'Watch the Hakka live', 'See a live Wimbledon match', 'Set a guinness world record', 'Watch a rocket launch', 'Take a mud bath', 'Catch, cook and eat a fish', 'Create an ice sculpture', 'Create a signature dish', 'Eat an insect', 'Eat at a michelin 3-star restaurant', 'Eat fondue', 'Learn a song on the piano', 'Make cheese', 'Make my own wine', 'Stomp grapes', 'Have cooking lesson from a famous chef', 'Eat a deep fried mars bar', 'Do random act of kindness', 'Give blood', 'Help someone complete something on their bucket list', 'Learn to speak another language', '2 min Handstand', 'One arm chin up', 'Shoot a machine gun', 'Ride a snowmobile', 'Drive speed boat', 'Ride a Segway', 'Drive a dune buggy', 'Spend Xmas in the snow', 'Spend Xmas in the sun', 'Road trip around Europe', 'Sleep in a treehouse', 'Stay at an underwater hotel', 'Visit New Zealand', 'Stay in a Water bungalow', 'Trip to Vegas', 'See the Grand canyon', 'Visit the Hover damn', 'Go to San Francisco', 'Run the Rocky Steps in Philadelphia', 'Relax in the Blue lagoon in Iceland', 'Zero gravity plane ride', 'Volunteer', 'Go to watch gymnastics', 'Wedding reunion in Cyprus', 'Learn to dive into water', 'Donate a bench with your name on it', 'Watch a demolition'];
var done = ['Arrive be seaplane', 'Travel on a Zip line', 'Paddle board on a warm ocean', 'Learn to scuba dive', 'Drive a digger', 'Swim with turtles', 'Learn to carve wood', 'Go in a sensory deprivation tank', 'Eat a 10 course meal', 'Go deep sea fishing', 'Have a go on a Jetski', 'Holiday in Bali', 'Take the Guinness Brewery tour in Dublin', 'Climb Snowdon', 'Take a photo every day for a year - tried, failed, never again', 'Watch strongman competition'];

var Items = function Items(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      title = _ref.title;

  if (list.length) {
    return __jsx(S_div_list, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, title, ": (", list.length, ")"), __jsx(S_ol, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, list.map(function (item) {
      return __jsx("li", {
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, item);
    })));
  }

  return null;
};

var BucketList = function BucketList() {
  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Bucket list")), __jsx(S_h1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Bucket list"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "On my 40th birthday a wrote this list of things I was going to try and do before I was 50. Some of those things are easy and some of them I feel may be a bit ambitious but I'll give it a try and see what happens."), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(Items, {
    list: todo,
    title: "Still to do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx(Items, {
    list: done,
    title: "Done",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BucketList);

/***/ })

})
//# sourceMappingURL=bucket-list.js.20e1632f414f49d9639d.hot-update.js.map