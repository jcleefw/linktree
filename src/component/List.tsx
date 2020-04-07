import React from 'react'
import ClassicListItem from './ClassicList'
import '../styles/List.scss'
import { ClassicProps, MusicPlayerProps, ShowProps } from '../types/LinkTypes'
import MusicPlayerListItem from './MusicPlayerList'

type ListProps = {
  data: Array<any>
}

const List: React.FC<ListProps> = ({ data }) => {
  const listItem = data.map((item, key) => {
    if (item.type === 'classic')
      return <ClassicListItem key={key} itemData={item} />
    if (item.type === 'musicPlayer')
      return <MusicPlayerListItem key={key} itemData={item} />
    // @todo To be implemented
    // if (item.type === 'show')
    //   return
    return
  })

  return <section className="list-container">{listItem}</section>
}

export default List
