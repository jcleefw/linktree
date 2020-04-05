import React from 'react'
import Button from './Button'

interface ExpandableLinkWrapperProps {
  tabTitle: string
  children: React.ReactNode
}

const ExpandableLinkWrapper: React.FC<ExpandableLinkWrapperProps> = ({
  children,
  tabTitle,
}) => {
  return (
    <article className="expandable-list list-item">
      <Button buttonText={tabTitle} />
      <div className="expanded-container">
        <section>{children}</section>
      </div>
    </article>
  )
}

export default ExpandableLinkWrapper
