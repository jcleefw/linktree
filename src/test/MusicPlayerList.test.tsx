import React from 'react'
import { mount } from 'enzyme'
import MusicPlayerListItem, {
  MusicLinkElement,
} from '../component/MusicPlayerList'

describe('MusicPlayerListItem', () => {
  it('should render a list item', () => {
    const data = {
      type: 'musicPlayer',
      songName: 'Happy',
      artist: 'Pharrell Williams, and others with super long name',
      albumImage: '/albumimage.jpeg',
      musicLinks: [
        {
          platform: 'spotify',
          linkTo: 'https://open.spotify.com/track/xxx',
        },
        {
          platform: 'apple_music',
          linkTo: 'https://music.apple.com/track/xxx',
        },
      ],
    }

    const wrapper = mount(<MusicPlayerListItem itemData={data} />)
    const header = wrapper.find('.music-player-header')
    expect(header.length).toEqual(1)
    expect(header.find('.player-image').props().src).toEqual(data.albumImage)
    expect(header.find('.title-description').text()).toEqual(
      'Happy - Pharrell Williams, and others with super long name'
    )
    const musicLinkElements = wrapper.find(MusicLinkElement)
    expect(musicLinkElements.length).toEqual(2)
    expect(musicLinkElements.first().find('.platform-name').text()).toEqual(
      'spotify'
    )
  })
})
