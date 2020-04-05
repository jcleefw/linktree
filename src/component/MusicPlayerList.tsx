import React from 'react'
import { MusicLink, SongBasicProp } from '../types/LinkTypes'
import { ReactSVG } from 'react-svg'
import playbutton from '../assets/play-small.svg'
import arrow from '../assets/down-arrow.svg'
import ExpandableLinkWrapper from './ExpandableLinkWrapper'

export const MusicLinkElement: React.FC<MusicLink> = ({ platform, linkTo }) => {
  const platformName = platform.replace('_', ' ')
  const platformImageUrl = platform.replace('_', '-')

  return (
    // @todo: use onclick to handle when user selection platform to play music
    // 2 types of onclick,
    // 1 on the item list
    // 1 on the plaform logo
    <div className="music-link-item">
      <a href={linkTo} target="_blank" rel="noopener noreferrer">
        <ReactSVG
          className="social-icon"
          src={`/social/${platformImageUrl}.svg`}
        />
      </a>
      <span className="platform-name">{platformName}</span>
      <ReactSVG className="arrow right-arrow" src={arrow} />
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
      <img className="player-image" src={albumImage} alt={songName} />
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
