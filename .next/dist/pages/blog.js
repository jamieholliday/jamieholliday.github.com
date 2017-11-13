'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _summary = require('../content/summary');

var _summary2 = _interopRequireDefault(_summary);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Wrapper = require('../components/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _date = require('../helpers/date');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 20px;\n  margin-bottom: 20px;\n'], ['\n  font-size: 20px;\n  margin-bottom: 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['margin-bottom: 10px;'], ['margin-bottom: 10px;']);

var S_h1_title = _styledComponents2.default.h2(_templateObject);
var S_li_list = _styledComponents2.default.li(_templateObject2);

var renderItem = function renderItem(item, key) {
  return _react2.default.createElement(S_li_list, { key: key }, _react2.default.createElement('a', { href: '/blog/' + item.base.replace('.json', '') }, item.title), _react2.default.createElement('p', null, (0, _date.fromIso)(item.date)));
};

var Blog = function Blog(props) {
  return _react2.default.createElement(_Wrapper2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Blog - all posts')), _react2.default.createElement(S_h1_title, null, 'Blog posts'), _react2.default.createElement('ul', null, (0, _keys2.default)(_summary2.default.fileMap).map(function (item, itr) {
    return renderItem(_summary2.default.fileMap[item], itr);
  })));
};

exports.default = Blog;