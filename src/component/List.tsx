import React from 'react'
import ClassicListItem, { ClassicProps } from './ClassicList'
import '../styles/List.scss'

export interface ItemProps {
  itemData: ClassicProps
}

interface MusicPlayerProps {}
interface Show {}

interface ListItemProps {}
type ListProps = {
  data: Array<ClassicProps | any>
}

const List: React.FC<ListProps> = ({ data }) => {
  const listItem = data.map((item, key) => {
    if (item.type === 'classic')
      return <ClassicListItem key={key} itemData={item} />

    return
  })

  return <section className="list-container">{listItem}</section>
}

export default List
