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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    font-family: ', ';\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0.5em 0;\n  }\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  p {\n    line-height: 1.2;\n    margin-bottom: 1em;\n  }\n\n  .blog ul {\n    padding-left: 20px;\n  }\n\n  .blog li {\n    margin-bottom: 10px;\n    list-style: initial; \n  }\n'], ['\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    font-family: ', ';\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0.5em 0;\n  }\n\n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  p {\n    line-height: 1.2;\n    margin-bottom: 1em;\n  }\n\n  .blog ul {\n    padding-left: 20px;\n  }\n\n  .blog li {\n    margin-bottom: 10px;\n    list-style: initial; \n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  min-height: calc(100vh - 147px);\n'], ['\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  min-height: calc(100vh - 147px);\n']);

// Import typefaces


(0, _styledComponents.injectGlobal)(_templateObject, _styles.fonts.default, _styles.colours.blue);

var S_main = _styledComponents2.default.main(_templateObject2);

var Wrapper = function Wrapper(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Header2.default, null), _react2.default.createElement(S_main, null, _react2.default.createElement(_Centered2.default, null, props.children)), _react2.default.createElement(_Footer2.default, null));
};

exports.default = Wrapper;