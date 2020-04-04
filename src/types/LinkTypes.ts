export type linkType = 'classic' | 'musicPlayer' | 'shows'

export type MusicLink = {
  key: number
  platform: string
  linkTo: string
}

export type SongBasicProp = {
  songName: string
  artist: string
  albumImage: string
}

export interface ClassicProps {
  type: linkType
  linkName: string
  linkTo: string
}

export interface MusicPlayerProps extends SongBasicProp {
  type: 'musicPlayer'
  musicLinks: Array<MusicLink> | undefined
}
export interface ShowProps {
  type: 'show'
  date: string
  time: string
  locationName: string
  linkTo: string
  ticketState: 'available' | 'sold_out'
}

export type Theme = {
  theme: 'dark' | 'light'
}
