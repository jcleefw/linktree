import React from 'react'
import { MusicLink, SongBasicProp } from '../types/LinkTypes'
import { ReactSVG } from 'react-svg'
import playbutton from '../assets/play-small.svg'
import arrow from '../assets/down-arrow.svg'
import ExpandableLinkWrapper from './ExpandableLinkWrapper'

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

const MusicPlayerHeader: React.FC<SongBasicProp> = ({
  songName,
  artist,
  albumImage,
}) => {
  /* @todo: use onclick to toggle the opening of the tab */
  return (
    <header className="music-player-header">
      <img className="player-image" src={albumImage} />
      <ReactSVG className="play-button-icon" src={playbutton} />
      <span className="title-description">{`${songName} - ${artist}`}</span>
    </header>
  )
}

const MusicPlayerListItem: React.FC<{
  itemData: any
}> = ({ itemData }) => {
  const { songName, artist, albumImage } = itemData
  const header = (
    <MusicPlayerHeader
      songName={songName}
      artist={artist}
      albumImage={albumImage}
    />
  )
  return (
    <ExpandableLinkWrapper tabTitle={'Music'}>
      {header}
      {itemData.musicLinks && generateMusicLinkItem(itemData.musicLinks)}
    </ExpandableLinkWrapper>
  )
}

export default MusicPlayerListItem
