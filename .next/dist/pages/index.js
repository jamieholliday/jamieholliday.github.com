'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _styles = require('../helpers/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['margin-bottom: 20px;'], ['margin-bottom: 20px;']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 50px;\n\n  ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    flex-direction: row\n  '], ['\n    flex-direction: row\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 20px;\n  width: 300px;\n  height: 300px;\n  align-self: center;\n  flex: 1;\n\n  ', ';\n'], ['\n  margin-bottom: 20px;\n  width: 300px;\n  height: 300px;\n  align-self: center;\n  flex: 1;\n\n  ', ';\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0 20px 0 0;\n    width: 150px;\n    height: 150px;\n  '], ['\n    margin: 0 20px 0 0;\n    width: 150px;\n    height: 150px;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  border: 5px solid ', ';\n  border-radius: 50%;\n  width: 300px;\n  height: 300px;\n  ', ';\n'], ['\n  border: 5px solid ', ';\n  border-radius: 50%;\n  width: 300px;\n  height: 300px;\n  ', ';\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    width: 150px;\n    height: 150px;\n  '], ['\n    width: 150px;\n    height: 150px;\n  ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['', ';'], ['', ';']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['padding-top: 30px;'], ['padding-top: 30px;']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 -5px 20px;\n\n  ', ';\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 -5px 20px;\n\n  ', ';\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    justify-content: space-between\n  '], ['\n    justify-content: space-between\n  ']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 330px;\n  width: 100%;\n  margin: 5px;\n  border: 3px solid #f1f1f1;\n'], ['\n  max-width: 330px;\n  width: 100%;\n  margin: 5px;\n  border: 3px solid #f1f1f1;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  margin-bottom: 20px;\n'], ['\n  width: 100%;\n  margin-bottom: 20px;\n']);

var S_h1 = _styledComponents2.default.h1(_templateObject);
var S_h2 = _styledComponents2.default.h2(_templateObject);

var S_div_about = _styledComponents2.default.div(_templateObject2, _styles.media.sm(_templateObject3));

var S_div_profile = _styledComponents2.default.div(_templateObject4, _styles.media.sm(_templateObject5));

var S_img_profile = _styledComponents2.default.img(_templateObject6, _styles.colours.darkBlue, _styles.media.sm(_templateObject7));

var S_div_copy = _styledComponents2.default.div(_templateObject8, _styles.media.sm(_templateObject9));

var S_ul_portfolio_items = _styledComponents2.default.ul(_templateObject10, _styles.media.sm(_templateObject11));

var S_img_portfolio_item = _styledComponents2.default.img(_templateObject12);

var S_img_portfolio_main = _styledComponents2.default.img(_templateObject13);

var portfolio = [{ alt: 'Nokia screenshot', img: 'screen2.jpg' }, { alt: 'Ignition screenshot', img: 'screen3.jpg' }, { alt: 'JCC screenshot', img: 'screen4.jpg' }, { alt: 'Jaguar Landrover screenshot', img: 'screen6.jpg' }, { alt: 'Pavers screenshot', img: 'screen7.jpg' }, { alt: 'IJP screenshot', img: 'screen8.jpg' }, { alt: 'PoP screenshot', img: 'screen9.jpg' }, { alt: 'Bauhaus Kids screenshot', img: 'screen10.jpg' }, { alt: 'Victoria Dashboard screenshot', img: 'screen11.jpg' }];

var renderAbout = function renderAbout() {
  return _react2.default.createElement('section', null, _react2.default.createElement(S_div_about, null, _react2.default.createElement(S_div_profile, null, _react2.default.createElement(S_img_profile, { src: '/images/jamie.jpg', alt: 'Jamie Holliday' })), _react2.default.createElement(S_div_copy, null, _react2.default.createElement('p', null, 'I\'m Jamie. I currenty work for', ' ', _react2.default.createElement('a', { href: 'http://www.myjobmatcher.com' }, 'MyJobMatcher'), ' as a Lead Front End Developer. My daily work involves building apps focussed on matching users to their perfect job and helping recruiters find relevant hires, as well as the development of internal tools'), _react2.default.createElement('p', null, 'I work 100% remotely. I\'m very happy and productive with this setup. The ratrace commute is not for me thanks.'))));
};

var renderPortfolio = function renderPortfolio() {
  return _react2.default.createElement('section', null, _react2.default.createElement(S_h2, null, 'Portfolio'), _react2.default.createElement('p', null, 'I have worked on a number of Front End projects in various product and agency environments, for brands such as Agent Provocateur, Polarn O Pyret, Bauhaus, Nokia, Toyota, Jaguar LandRover, Honda, Nissan, L\'Or\xE9al, Lexus & Yamaha.'), _react2.default.createElement(S_img_portfolio_main, {
    alt: 'MJM uk screenshot',
    src: '/images/screen15.jpg'
  }), _react2.default.createElement(S_ul_portfolio_items, null, portfolio.map(function (item, itr) {
    return _react2.default.createElement('li', { key: itr }, _react2.default.createElement(S_img_portfolio_item, { src: '/images/' + item.img, alt: item.alt }));
  })));
};
var renderTools = function renderTools() {
  return _react2.default.createElement('section', null, _react2.default.createElement(S_h2, null, 'Tools'), _react2.default.createElement('p', null, 'I try and stay up to date with the ever changing Front End techniques and technologies. My current favourite tech stack would include React, Redux, Node, Webpack, ES6, Jest.'));
};

var Home = function Home(props) {
  return _react2.default.createElement(_Wrapper2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Jamie Holliday')), _react2.default.createElement(S_h1, null, 'Jamie Holliday'), renderAbout(), renderPortfolio(), renderTools());
};

exports.default = Home;