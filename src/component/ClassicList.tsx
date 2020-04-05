import React from 'react'
import LinkWrapper from './LinkWrapper'
import { ClassicProps } from '../types/LinkTypes'
import { ListClassName } from '../types/enums'
import cx from 'classnames'

const ClassicListItem: React.FC<{ itemData: ClassicProps }> = ({
  itemData,
}) => {
  const { linkName, linkTo, type } = itemData
  return (
    <LinkWrapper
      className={cx(ListClassName.classic, 'list-item')}
      linkTo={linkTo}
      target={'_blank'}
    >
      <li className="list">{linkName}</li>
    </LinkWrapper>
  )
}

export default ClassicListItem
