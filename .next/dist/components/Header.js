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

var _jsxFileName = '/Users/peterfox/Documents/jamieholliday.com/components/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 20px;\n  background: #323a45;\n  display: flex;\n  padding: 20px;\n  align-items: center;\n'], ['\n  margin-bottom: 20px;\n  background: #323a45;\n  display: flex;\n  padding: 20px;\n  align-items: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n'], ['\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin-left: 20px;'], ['margin-left: 20px;']);

var S_header = _styledComponents2.default.header(_templateObject);

var S_header_content = _styledComponents2.default.div(_templateObject2);

var S_ul_links = _styledComponents2.default.ul(_templateObject3);

var S_li_link = _styledComponents2.default.li(_templateObject4);

var Header = function Header() {
  return _react2.default.createElement(S_header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_Centered2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(S_header_content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }))), _react2.default.createElement(S_ul_links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(S_li_link, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', { href: 'http://employjamie.com', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'CV')), _react2.default.createElement(S_li_link, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_link2.default, { href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Blog')))))));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTG9nbyIsIkNlbnRlcmVkIiwiTGluayIsIlNfaGVhZGVyIiwiaGVhZGVyIiwiU19oZWFkZXJfY29udGVudCIsImRpdiIsIlNfdWxfbGlua3MiLCJ1bCIsIlNfbGlfbGluayIsImxpIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsT0FBeEI7O0FBUUEsSUFBTSxtQkFBbUIsMkJBQW5CLEFBQTBCLElBQWhDOztBQU1BLElBQU0sYUFBYSwyQkFBYixBQUFvQixHQUExQjs7QUFLQSxJQUFNLFlBQVksMkJBQVosQUFBbUIsR0FBekI7O0FBRUEsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBO3lCQUNaLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBR0o7QUFISTtBQUFBLHdCQUdILGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVE7Z0JBQVI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLHdCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FmQyxBQUNiLEFBQ0UsQUFDRSxBQU1FLEFBSUUsQUFDRSxBQUNFO0FBZmQsQUF3QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmZveC9Eb2N1bWVudHMvamFtaWVob2xsaWRheS5jb20ifQ==