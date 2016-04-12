#! /usr/bin/env node
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _isomorphic = require('./isomorphic');

var _isomorphic2 = _interopRequireDefault(_isomorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-register')({
  presets: ['es2015', 'react']
});

_commander2.default.version('0.2').usage('[options] <file ...>').option('-c, --component <path>', 'React component path').option('-p, --props <string>', 'Component properties (JSON)').parse(process.argv);

var path = false,
    props = false;

if (_commander2.default.component) {
  path = _commander2.default.component;
}

if (_commander2.default.props) {
  props = JSON.parse(_commander2.default.props);
}

if (path && props) {
  console.log(_server2.default.renderToStaticMarkup(_react2.default.createElement(_isomorphic2.default, _extends({
    react2htmlComponentPath: path
  }, props))));
} else {
  _commander2.default.outputHelp();
}