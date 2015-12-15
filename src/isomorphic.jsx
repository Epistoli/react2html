import React, {Component} from 'react';

export default class Isomorphic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.react2htmlComponentPath) {
      const MyComponent = require(this.props.react2htmlComponentPath).default;
      return <MyComponent {... this.props} />;
    }
    return false;
  }
}
