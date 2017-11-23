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

var _jsxFileName = '/Users/peterfox/Documents/jamieholliday.com/pages/blog.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 20px;\n  margin-bottom: 20px;\n'], ['\n  font-size: 20px;\n  margin-bottom: 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['margin-bottom: 10px;'], ['margin-bottom: 10px;']);

var S_h1_title = _styledComponents2.default.h2(_templateObject);
var S_li_list = _styledComponents2.default.li(_templateObject2);

var renderItem = function renderItem(item, key) {
  return _react2.default.createElement(S_li_list, { key: key, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { href: '/blog/' + item.base.replace('.json', ''), __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, item.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, (0, _date.fromIso)(item.date)));
};

var Blog = function Blog(props) {
  return _react2.default.createElement(_Wrapper2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Blog - all posts')), _react2.default.createElement(S_h1_title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Blog posts'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, (0, _keys2.default)(_summary2.default.fileMap).sort(function (a, b) {
    return _summary2.default.fileMap[a].date > _summary2.default.fileMap[b].date ? 0 : 1;
  }).map(function (item, itr) {
    return renderItem(_summary2.default.fileMap[item], itr);
  })));
};

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdW1tYXJ5IiwiSGVhZCIsIldyYXBwZXIiLCJzdHlsZWQiLCJmcm9tSXNvIiwiU19oMV90aXRsZSIsImgyIiwiU19saV9saXN0IiwibGkiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImtleSIsImJhc2UiLCJyZXBsYWNlIiwidGl0bGUiLCJkYXRlIiwiQmxvZyIsImZpbGVNYXAiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJpdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWU7Ozs7Ozs7OztBQUV4QixJQUFNLGFBQWEsMkJBQWIsQUFBb0IsR0FBMUI7QUFJQSxJQUFNLFlBQVksMkJBQVosQUFBbUIsR0FBekI7O0FBRUEsSUFBTSxhQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsTUFBRCxBQUFPLEtBQVEsQUFDaEM7eUJBQ0csY0FBRCxhQUFXLEtBQVgsQUFBZ0I7Z0JBQWhCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsT0FBRyxpQkFBZSxLQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsU0FBcEMsQUFBa0IsQUFBMkI7Z0JBQTdDO2tCQUFBLEFBQXFEO0FBQXJEO1VBREYsQUFDRSxBQUEwRCxBQUMxRCx3QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSx3QkFBWSxLQUhoQixBQUNFLEFBRUUsQUFBSSxBQUFhLEFBR3RCO0FBUEQ7O0FBU0EsSUFBTSxPQUFPLFNBQVAsQUFBTyxZQUFTLEFBQ3BCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkosQUFDRSxBQUNFLEFBRUYsc0NBQUMsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSkYsQUFJRSxBQUNBLCtCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLHlCQUNlLGtCQUFaLEFBQW9CLFNBQXBCLEFBQ0UsS0FDQyxVQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7V0FDRSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsR0FBaEIsQUFBbUIsT0FBTyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsR0FBMUMsQUFBNkMsT0FBN0MsQUFBb0QsSUFEdEQsQUFDMEQ7QUFIN0QsS0FBQSxBQUtFLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxLQUFQO1dBQWUsV0FBVyxrQkFBQSxBQUFRLFFBQW5CLEFBQVcsQUFBZ0IsT0FBMUMsQUFBZSxBQUFrQztBQVo5RCxBQUNFLEFBS0UsQUFDRyxBQVNSO0FBakJELEFBbUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJsb2cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZm94L0RvY3VtZW50cy9qYW1pZWhvbGxpZGF5LmNvbSJ9