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

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Centered = require('./Centered');

var _Centered2 = _interopRequireDefault(_Centered);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 20px;\n  background: #323a45;\n  display: flex;\n  padding: 20px;\n  align-items: center;\n'], ['\n  margin-bottom: 20px;\n  background: #323a45;\n  display: flex;\n  padding: 20px;\n  align-items: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n'], ['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin-left: 20px;'], ['margin-left: 20px;']);

var S_header = _styledComponents2.default.header(_templateObject);

var S_header_content = _styledComponents2.default.div(_templateObject2);

var S_ul_links = _styledComponents2.default.ul(_templateObject3);

var S_li_link = _styledComponents2.default.li(_templateObject4);

var Header = function Header() {
  return _react2.default.createElement(S_header, null, _react2.default.createElement(_Centered2.default, null, _react2.default.createElement(S_header_content, null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, _react2.default.createElement(_Logo2.default, null))), _react2.default.createElement(S_ul_links, null, _react2.default.createElement(S_li_link, null, _react2.default.createElement('a', { href: 'http://employjamie.com' }, 'CV')), _react2.default.createElement(S_li_link, null, _react2.default.createElement(_link2.default, { href: '/blog' }, _react2.default.createElement('a', null, 'Blog')))))));
};

exports.default = Header;