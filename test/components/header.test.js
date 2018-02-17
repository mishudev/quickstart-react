import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Header from '../../src/components/header'

describe('Component: Header', () => {

  const minProps = {

  }

  it('renders without exploding', () => {
    const wrapper = shallow(<Header {...minProps} />)
    expect(wrapper.length).to.equal(1)
  })

  it('links correctly', () => {
    const wrapper = shallow(<Header {...minProps} />)
    expect(wrapper.find('Link').at(0).prop('to')).to.equal('/')
    expect(wrapper.find('Link').at(1).prop('to')).to.equal('/feature')
  })

})