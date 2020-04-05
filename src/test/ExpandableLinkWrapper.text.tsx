import React from 'react'
import { mount } from 'enzyme'
import ExpandableLinkWrapper from '../component/ExpandableLinkWrapper'
import Button from '../component/Button'

describe('ExpandableLinkWrapper', () => {
  const childrenElement = <div>I am childen</div>
  const wrapper = mount(
    <ExpandableLinkWrapper tabTitle="expand">
      {childrenElement}
    </ExpandableLinkWrapper>
  )
  it('should render an expandable list item', () => {
    expect(
      wrapper.find('article').hasClass('expandable-list list-item')
    ).toEqual(true)
    expect(wrapper.find(Button).length).toEqual(1)
  })

  it('onClick should toggle the expandable container', () => {
    expect(wrapper.find('.expanded-container').hasClass('open')).toEqual(false)
    const button = wrapper.find(Button).at(0)
    button.simulate('click', event)
    expect(wrapper.find('.expanded-container').hasClass('open')).toEqual(true)
    button.simulate('click', event)
    expect(wrapper.find('.expanded-container').hasClass('open')).toEqual(false)
  })
})
