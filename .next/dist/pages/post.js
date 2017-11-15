'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Wrapper = require('../components/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _date = require('../helpers/date');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peterfox/Documents/jamieholliday.com/pages/post.js?entry';


var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      var content = this.props.content;

      return _react2.default.createElement(_Wrapper2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, content.title)), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, content.title), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, (0, _date.fromIso)(content.date)), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content.bodyHtml }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var query = _ref.query;

      var content = require('../content/' + query.id + '.json');
      return { id: query.id, content: content };
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSGVhZCIsIldyYXBwZXIiLCJmcm9tSXNvIiwic3R5bGVkIiwiUG9zdCIsImNvbnRlbnQiLCJwcm9wcyIsInRpdGxlIiwiZGF0ZSIsIl9faHRtbCIsImJvZHlIdG1sIiwicXVlcnkiLCJyZXF1aXJlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFlOztBQUN4QixBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs2QkFLSztVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxpQkFGSixBQUNFLEFBQ0UsQUFBZ0IsQUFFbEIseUJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsaUJBSkYsQUFJRSxBQUFhLEFBQ2Isd0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSTtBQUFKO0FBQUEsNEJBQVksUUFMZCxBQUtFLEFBQUksQUFBZ0IsQUFDcEIsK0NBQUsseUJBQXlCLEVBQUUsUUFBUSxRQUF4QyxBQUE4QixBQUFrQjtvQkFBaEQ7c0JBUEosQUFDRSxBQU1FLEFBR0w7QUFISzs7Ozs7MENBYjRCO1VBQVQsQUFBUyxhQUFULEFBQVMsQUFDaEM7O1VBQU0sVUFBVSx3QkFBc0IsTUFBdEIsQUFBNEIsS0FBNUMsQUFDQTthQUFPLEVBQUUsSUFBSSxNQUFOLEFBQVksSUFBSSxTQUF2QixBQUFPLEFBQ1I7Ozs7O0FBSmdCLEEsQUFvQm5COztrQkFBQSxBQUFlIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZm94L0RvY3VtZW50cy9qYW1pZWhvbGxpZGF5LmNvbSJ9