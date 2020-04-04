import React from 'react'
import LinkWrapper from './LinkWrapper'
import { ClassicProps } from '../types/LinkTypes'

const ClassicListItem: React.FC<{ itemData: ClassicProps }> = ({
  itemData,
}) => {
  const { linkName, linkTo, type } = itemData
  return (
    <LinkWrapper linkTo={linkTo} type={type}>
      <li className="list">{linkName}</li>
    </LinkWrapper>
  )
}

export default ClassicListItem
