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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbImNzcyIsImxheW91dCIsIm1heFdpZHRoIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJmb250cyIsImRlZmF1bHQiLCJjb2xvdXJzIiwiYmx1ZSIsImRhcmtCbHVlIiwibWVkaWFSdWxlcyIsIm9ubHlYcyIsIm9ubHlNZCIsIm1lZGlhIiwicmVkdWNlIiwicHJldiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUVUOzs7Ozs7QUFBTyxJQUFNO1lBQU4sQUFBZSxBQUNWO0FBRFUsQUFDcEI7QUFFRixJQUFNO01BQWMsQUFDZCxBQUNKO01BRmtCLEFBRWQsQUFDSjtNQUhGLEFBQW9CLEFBR2QsQUFHTjtBQU5vQixBQUNsQjs7QUFLSyxJQUFNO1dBQU4sQUFBYyxBQUNWLEFBR1g7QUFKcUIsQUFDbkI7O0FBR0ssSUFBTTtRQUFVLEFBQ2YsQUFDTjtZQUZLLEFBQWdCLEFBRVg7QUFGVyxBQUNyQjs7QUFJRixJQUFNOzRDQUNtQyxZQUFBLEFBQVksS0FBbkQsQUFBd0QsS0FEdkMsQUFFakI7QUFDQTt1Q0FBbUMsWUFBbkMsQUFBK0MsS0FIOUIsQUFJakI7QUFDQTt1QkFBbUIsWUFBbkIsQUFBK0IsS0FMZCxBQU1qQjtBQUNBOzJDQUF1QyxZQUF2QyxBQUFtRCxtQkFBYSxZQUFBLEFBQVksS0FBNUUsQUFDRSxLQVJlLEFBU2pCO0FBQ0E7dUJBQW1CLFlBQW5CLEFBQStCLEtBVmpDLEFBQW1CLEFBYW5CO0FBYm1CLEFBQ2pCOztBQVlLLElBQU0sNENBQVEsQUFBWSxZQUFaLEFBQXdCLE9BQU8sVUFBQSxBQUFDLE1BQUQsQUFBTyxNQUFTLEFBQ2xFO29DQUFBLEFBQ0ssNkNBREwsQUFFTSxNQUFTLHFCQUFBO1dBQUEsQUFBYSw0Q0FBYSxXQUExQixBQUEwQixBQUFXLE9BQVMsdUNBQTlDO0FBRmYsQUFJRDtBQUxvQixDQUFBLEVBQWQsQUFBYyxBQUtsQiIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZm94L0RvY3VtZW50cy9qYW1pZWhvbGxpZGF5LmNvbSJ9