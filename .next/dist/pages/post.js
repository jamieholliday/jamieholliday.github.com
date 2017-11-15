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

      return _react2.default.createElement(_Wrapper2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, content.title)), _react2.default.createElement('h1', null, content.title), _react2.default.createElement('p', null, (0, _date.fromIso)(content.date)), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: content.bodyHtml } }));
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