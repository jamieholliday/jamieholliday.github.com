'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Centered = require('./Centered');

var _Centered2 = _interopRequireDefault(_Centered);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: #f0f0f0;\n  padding: 20px;\n  font-size: 14px;\n  line-height: 1;\n'], ['\n  background: #f0f0f0;\n  padding: 20px;\n  font-size: 14px;\n  line-height: 1;\n']);

var S_div_footer = _styledComponents2.default.footer(_templateObject);

var Footer = function Footer() {
  return _react2.default.createElement(S_div_footer, null, _react2.default.createElement(_Centered2.default, null, 'Google Analytics is used here. There are some cookies involved with that. Just so you know.'));
};

exports.default = Footer;