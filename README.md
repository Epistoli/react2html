react2html
==========

Render React components server-side.

Install globally with NPM:

```
npm install -g react2html
```

The `help` flag should get you started:

```
$ react2html --help
  Usage: react2html [options] <file ...>

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -c, --component <path>  React component path
    -p, --props <string>    Component properties (JSON)
```

Example usage
-------------

Say you have a little JSX component `foo.jsx`:

```
import React, {Component} from 'react';

export default ({who}) => (
  <p>
    Hello, {who}!
  </p>
);
```

To render it to stdout:

```
react2html -c `pwd`/foo -p '{"who": "world"}'
```

NB: you **MUST** use the full path to the JSX component, without its extension,
so that it can be required when compiling.

Hack
----

Install development dependencies with `npm install`.

We use a simple Gulp file to manage transpilation from JSX/ES6 to plain
Javascript. To build run: `npm run build`, or just `gulp build` if you already
have gulp around.

Run tests with `npm test`.

Contributing
------------

Fork this repository, hack on your fork, make sure tests pass, then submit a
pull-request.

License
-------

MIT.
