#! /usr/bin/env node

import fs from 'fs';
import Program from 'commander'

import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import Isomorphic from './isomorphic';

require('babel-register')({
  presets: ['es2015', 'react']
});

Program
  .version('0.1')
  .usage('[options] <file ...>')
  .option('-c, --component <path>', 'React component path')
  .option('-p, --props <string>',   'Component properties (JSON)')
  .parse(process.argv);

let path  = false,
    props = false;

if (Program.component) {
  path = Program.component;
}

if (Program.props) {
  props = JSON.parse(Program.props);
}

if (path && props) {
  console.log(ReactDOMServer.renderToStaticMarkup(
    <Isomorphic
      react2htmlComponentPath={path}
      {...props}
    />
  ));
} else {
  Program.outputHelp();
}
