import React from 'react';
import {mount} from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  let wrapper = mount(<Footer />);

  it('should render', () => {
    expect(wrapper.find('footer')).toMatchSnapshot();
  })
})
