/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import Header from '../../src/components/Header'
var locus = require('locus')

describe('Header', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header test={true}/>)
    eval(locus)
    expect(wrapper.find('.extended-forecast-link').text()).toEqual('View Extended Forecast')
    // expect(wrapper.contains('.extended-forecast-link')).toEqual(true)
  });
});
