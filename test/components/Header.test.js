/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import Header from '../../src/components/Header'

describe('Header', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.contains(<div></div>).toEqual(true))
  });
});
