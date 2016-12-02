/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import Header from '../../src/components/Header'
// var locus = require('locus')

describe('Header', () => {
  it('should show the correct data that is passed to it', () => {
    const wrapper = shallow(<Header test={true} fakeLocation="Ann Arbor" fakeTemp='271.483' fakeWeatherType="very cold"/>)
    expect(wrapper.find('.current-weather-headline').text()).toEqual('The current weather in Ann Arbor is 28 °F and very cold.')
    // console.log(wrapper.find('.current-weather-headline').text());
    // expect(wrapper.find('.extended-forecast-link').text()).toEqual('View Extended Forecast')
    // // expect(wrapper.contains('.extended-forecast-link')).toEqual(true)
  });
});
