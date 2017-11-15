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

var _styles = require('../helpers/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n'], ['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  max-width: ', 'px;\n'], ['\n  width: 100%;\n  max-width: ', 'px;\n']);

var S_div_wrapper = _styledComponents2.default.div(_templateObject);

var S_div_container = _styledComponents2.default.div(_templateObject2, _styles.layout.maxWidth);

var Centered = function Centered(props) {
  return _react2.default.createElement(S_div_wrapper, null, _react2.default.createElement(S_div_container, null, props.children));
};

exports.default = Centered;