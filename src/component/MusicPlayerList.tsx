import React from 'react'
import LinkWrapper from './LinkWrapper'
import { MusicPlayerProps, MusicLink } from '../types/LinkTypes'
import { ReactSVG } from 'react-svg'
import playbutton from '../assets/play-small.svg'
import arrow from '../assets/down-arrow.svg'

const MusicLinkElement: React.FC<MusicLink> = ({ key, platform, linkTo }) => {
  const platformName = platform.replace('_', ' ')
  const platformImageUrl = platform.replace('_', '-')

  return (
    // @todo: use onclick to handle when user selection platform to play music
    <div className="music-link-item" key={key}>
      <a href={linkTo} target="_blank">
        <ReactSVG
          className="social-icon"
          src={`/social/${platformImageUrl}.svg`}
        />
      </a>
      <span className="platform-name">{platformName}</span>
      <ReactSVG className="right-arrow" src={arrow} />
    </div>
  )
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
  children: React.ReactNode
}

const ExpandableLinkWrapper: React.FC<ExpandableLinkWrapperProps> = ({
  children,
  tabTitle,
  playListData,
}) => {
  const { songName, artist, albumImage } = playListData

  return (
    <article className="expandable-list list-item">
      <div className="list">
        <div className="tab-title">{tabTitle}</div>
      </div>
      <div className="expanded-container">
        {/* @todo: use onclick to toggle the opening of the tab */}
        <header className="music-player-header">
          <img className="player-image" src={albumImage} />
          <ReactSVG className="play-button-icon" src={playbutton} />
          <span className="title-description">{`${songName} - ${artist}`}</span>
        </header>
        <section>{children}</section>
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
      {itemData.musicLinks && generateMusicLinkItem(itemData.musicLinks)}
    </ExpandableLinkWrapper>
  )
}

export default MusicPlayerListItem
