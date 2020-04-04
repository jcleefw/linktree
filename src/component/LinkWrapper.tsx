import React from 'react'
import cx from 'classnames'

type LinkWrapper = {
  type: 'classic' | 'musicPlayer' | 'shows'
  linkTo: string
  children: React.ReactNode
}

enum ListClassName {
  classic = 'classListItem',
  musicPlayer = 'musicPlayerListItem',
  shows = 'showListItem',
}

const LinkWrapper: React.FC<LinkWrapper> = ({ linkTo, children, type }) => {
  return (
    <a
      className={cx('list-item', { [ListClassName[type]]: type })}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default LinkWrapper
