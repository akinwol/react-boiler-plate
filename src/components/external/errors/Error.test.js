import React from 'react';
import {shallow} from 'enzyme';
import chai from 'chai';
import Error from '.';

describe('Error Component', () => {
  const props = {
    message: 'error message'
  }

  let wrapper = shallow(<Error {...props} />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should find the network error message', () => {
    chai.expect(wrapper.find('h3').text()).to.be.equal('Oops! Something went wrong.');
  })
})
