import React, { useState } from 'react'
import Button from './Button'
import cx from 'classnames'

interface ExpandableLinkWrapperProps {
  tabTitle: string
  children: React.ReactNode
}

const ExpandableLinkWrapper: React.FC<ExpandableLinkWrapperProps> = ({
  children,
  tabTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <article className="expandable-list list-item">
      <Button buttonText={tabTitle} onClick={onClickHandler} />
      <div className={cx('expanded-container', { ['open']: isOpen })}>
        <section>{children}</section>
      </div>
    </article>
  )
}

export default ExpandableLinkWrapper
