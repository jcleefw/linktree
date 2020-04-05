import React from 'react'
import LinkWrapper from './LinkWrapper'
import { ClassicProps } from '../types/LinkTypes'
import { ListClassName } from '../types/enums'
import cx from 'classnames'
import Button from './Button'

const ClassicListItem: React.FC<{ itemData: ClassicProps }> = ({
  itemData,
}) => {
  const { linkName, linkTo } = itemData
  return (
    <LinkWrapper
      className={cx(ListClassName.classic, 'list-item')}
      linkTo={linkTo}
      target={'_blank'}
    >
      <Button buttonText={linkName} />
    </LinkWrapper>
  )
}

export default ClassicListItem
