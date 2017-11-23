'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Centered = require('../components/Centered');

var _Centered2 = _interopRequireDefault(_Centered);

var _styles = require('../helpers/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peterfox/Documents/jamieholliday.com/components/Wrapper.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    font-family: ', ';\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0.5em 0;\n  }\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  p {\n    line-height: 1.2;\n    margin-bottom: 1em;\n  }\n\n  .blog ul {\n    padding-left: 20px;\n  }\n\n  .blog li {\n    margin-bottom: 10px;\n    list-style: initial; \n  }\n\n  img {\n    max-width: 100%\n  }\n'], ['\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    font-family: ', ';\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0.5em 0;\n  }\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  p {\n    line-height: 1.2;\n    margin-bottom: 1em;\n  }\n\n  .blog ul {\n    padding-left: 20px;\n  }\n\n  .blog li {\n    margin-bottom: 10px;\n    list-style: initial; \n  }\n\n  img {\n    max-width: 100%\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  min-height: calc(100vh - 147px);\n'], ['\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  min-height: calc(100vh - 147px);\n']);

// Import typefaces


(0, _styledComponents.injectGlobal)(_templateObject, _styles.fonts.default, _styles.colours.blue);

var S_main = _styledComponents2.default.main(_templateObject2);

var Wrapper = function Wrapper(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), _react2.default.createElement(S_main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement(_Centered2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, props.children)), _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }));
};

exports.default = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkZvb3RlciIsIkNlbnRlcmVkIiwiZm9udHMiLCJjb2xvdXJzIiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiZGVmYXVsdCIsImJsdWUiLCJTX21haW4iLCJtYWluIiwiV3JhcHBlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFPLEFBQWU7O0FBRy9CLEFBQU8sQUFBVTs7Ozs7Ozs7Ozs7QUFEakI7OztBQUdBLHFEQVFtQixjQVJuQixBQVF5QixTQVFaLGdCQWhCYixBQWdCcUI7O0FBK0JyQixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsS0FBdEI7O0FBT0EsSUFBTSxVQUFVLFNBQVYsQUFBVSxlQUFTLEFBQ3ZCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUFXO0FBQVg7QUFBQSxXQUhKLEFBRUUsQUFDRSxBQUFpQixBQUVuQiw0QkFBQSxBQUFDOztnQkFBRDtrQkFOSixBQUNFLEFBS0UsQUFHTDtBQUhLO0FBQUE7QUFQTixBQVlBOztrQkFBQSxBQUFlIiwiZmlsZSI6IldyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZm94L0RvY3VtZW50cy9qYW1pZWhvbGxpZGF5LmNvbSJ9