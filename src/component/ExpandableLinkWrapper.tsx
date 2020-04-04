import React from 'react'

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
      <div className="list">
        <div className="tab-title">{tabTitle}</div>
      </div>
      <div className="expanded-container">
        <section>{children}</section>
      </div>
    </article>
  )
}

export default ExpandableLinkWrapper
