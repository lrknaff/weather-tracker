import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import fakeStore from '../helpers/fakeStore'
import Header from '../../src/components/Header'

describe('Header', () => {
  xit('should show the correct data that is passed to it', () => {
    const wrapper = shallow(<Header test={true} fakeLocation="Ann Arbor" fakeTemp='271.483' fakeWeatherType="snow" />)
    expect(wrapper.find('.header-text-main').text()).toEqual('The current weather in Ann Arbor is 28 °F with snow.')
  })

  xit('should render a link for extended forecasts', () => {
    const wrapper = shallow(<Header test={true} fakeLocation="Ann Arbor" fakeTemp='271.483' fakeWeatherType="very cold" />)
    expect(wrapper.find('.extended-forecast-link')).toBeDefined()
  })

  it('should render primary div', () => {
    const wrapper = shallow(<Header state={fakeStore} />)
    expect(wrapper.find('.header-container').length).toEqual(1)
  })

  it('should include primary header text', () => {
    const wrapper = shallow(<Header state={fakeStore} />)
    expect(wrapper.find('.header-text-main').text()).toContain('The current weather')
  })
})
