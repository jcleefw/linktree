import React from 'react'
import LinkWrapper from './LinkWrapper'
import { MusicPlayerProps, MusicLink } from '../types/LinkTypes'
import { ReactSVG } from 'react-svg'
import playbutton from '../assets/play-small.svg'

const MusicLinkElement: React.FC<MusicLink> = ({ key, platform, linkTo }) => {
  return <div>blah</div>
}

const generateMusicLinkItem = (musicLinks: Array<MusicLink>) => {
  if (musicLinks.length < 1) return

  return musicLinks.map((musicLink: MusicLink, key: number) => {
    const { platform, linkTo } = musicLink
    return <MusicLinkElement key={key} platform={platform} linkTo={linkTo} />
  })
}

interface ExpandableLinkWrapperProps {
  tabTitle: string
  playListData: MusicPlayerProps
}

const ExpandableLinkWrapper: React.FC<ExpandableLinkWrapperProps> = ({
  tabTitle,
  playListData,
}) => {
  const { songName, artist, albumImage, musicLinks } = playListData

  return (
    <article className="expandable-list list-item">
      <div className="list">
        <div className="tab-title">{tabTitle}</div>
      </div>
      <div className="expanded-container">
        <header className="music-player-header">
          <img className="player-image" src={albumImage} />
          <ReactSVG className="play-button-icon" src={playbutton} />
          <span className="title-description">{`${songName} - ${artist}`}</span>
        </header>
        <section>{musicLinks && generateMusicLinkItem(musicLinks)}</section>
      </div>
    </article>
  )
}

const MusicPlayerListItem: React.FC<{
  itemData: any
}> = ({ itemData }) => {
  const { songName, artist, albumImage } = itemData
  return (
    <ExpandableLinkWrapper tabTitle={'Music'} playListData={itemData}>
      <div>blah</div>
    </ExpandableLinkWrapper>
  )
}

export default MusicPlayerListItem
