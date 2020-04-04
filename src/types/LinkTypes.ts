export type MusicLink = {
  key: number
  platform: string
  linkTo: string
}

export interface ClassicProps {
  type: 'classic'
  linkName: string
  linkTo: string
}

export interface MusicPlayerProps {
  type: 'musicPlayer'
  songName: string
  artist: string
  musicLinks: Array<MusicLink> | undefined
  albumImage: string
}
export interface ShowProps {
  type: 'show'
  date: string
  time: string
  locationName: string
  linkTo: string
  ticketState: 'available' | 'sold_out'
}
