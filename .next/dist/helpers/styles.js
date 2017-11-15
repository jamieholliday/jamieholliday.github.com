'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.colours = exports.fonts = exports.layout = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['@media ', '{', '}'], ['@media ', '{', '}']);

var layout = exports.layout = {
  maxWidth: 1200
};
var breakpoints = {
  sm: 747,
  md: 1024,
  lg: 1200
};

var fonts = exports.fonts = {
  default: '"Raleway", sans-serif'
};

var colours = exports.colours = {
  blue: '#428bca',
  darkBlue: '#5d6c80'
};

var mediaRules = {
  onlyXs: 'only screen and (max-width: ' + (breakpoints.sm - 1) + 'px)',
  /* small size and up */
  sm: 'only screen and (min-width: ' + breakpoints.sm + 'px)',
  // /* medium size and up */
  md: '(min-width: ' + breakpoints.md + 'px)',
  // /* only medium size */
  onlyMd: 'only screen and (min-width: ' + breakpoints.md + 'px) and ' + (breakpoints.lg - 1) + 'px',
  // /* large size and up */
  lg: '(min-width: ' + breakpoints.lg + 'px)'
};

var media = exports.media = (0, _keys2.default)(mediaRules).reduce(function (prev, next) {
  return (0, _extends3.default)({}, prev, (0, _defineProperty3.default)({}, '' + next, function undefined() {
    return (0, _styledComponents.css)(_templateObject, mediaRules[next], _styledComponents.css.apply(undefined, arguments));
  }));
}, {});