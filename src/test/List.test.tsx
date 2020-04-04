import React from 'react'
import { shallow } from 'enzyme'
import List from '../component/List'
import ClassicListItem from '../component/ClassicList'
import MusicPlayerListItem from '../component/MusicPlayerList'

describe('List', () => {
  it('should render a classic list item', () => {
    const data = [
      {
        type: 'classic',
        linkName: 'cool name',
        linkTo: 'some url',
      },
    ]

    // @ts-ignore
    const wrapper = shallow(<List data={data} />)
    expect(wrapper.find('.list-container').length).toEqual(1)
    expect(wrapper.find(ClassicListItem).length).toEqual(1)
  })

  it('should render a music player list item', () => {
    const data = [
      {
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
      },
    ]

    // @ts-ignore
    const wrapper = shallow(<List data={data} />)
    expect(wrapper.find('.list-container').length).toEqual(1)
    expect(wrapper.find(MusicPlayerListItem).length).toEqual(1)
  })

  it('should render nothing', () => {
    const data = [
      {
        type: 'blah',
      },
    ]
    // @ts-ignore
    const wrapper = shallow(<List data={data} />)
    expect(wrapper.find('.list-container').length).toEqual(1)
    expect(wrapper.find(MusicPlayerListItem).length).toEqual(0)
    expect(wrapper.find(ClassicListItem).length).toEqual(0)
  })
})
