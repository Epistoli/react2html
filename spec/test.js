import path from 'path';

import React, {Component} from 'react';
import { render } from 'enzyme';
import Chai, {expect} from 'chai';

import Isomorphic from '../src/isomorphic';

describe('Isomorphic', function() {
  it('renders nothing without a component', function() {
    const comp = render(<Isomorphic />);
    expect(comp.text()).to.eq("");
  });

  it('renders a component when given a proper path', function() {
    let comPath = `${path.resolve('spec/fixtures')}/hello`;
    let comp = render(<Isomorphic
                        react2htmlComponentPath={comPath}
                        who='world'
                      />);
    expect(comp.text()).to.eq('Hello, world!');
  })
});
