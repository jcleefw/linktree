import React from 'react'
import { ItemProps } from './List'

export type ClassicProps = {
  type: 'classic'
  link_name: string
  link_to: string
}

const ClassicListItem: React.FC<ItemProps> = ({ itemData }) => {
  const { link_name, link_to } = itemData
  return (
    <a className="listItem classListItem" href={link_to} target="_blank">
      <li className="list">{link_name}</li>
    </a>
  )
}

export default ClassicListItem
