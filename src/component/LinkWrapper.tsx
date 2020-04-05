import React from 'react'

type LinkWrapper = {
  linkTo: string
  children: React.ReactNode
  className?: string
  target: '_blank' | 'self'
}

const LinkWrapper: React.FC<LinkWrapper> = ({
  linkTo,
  children,
  className,
  target = '_blank',
}) => {
  return (
    <a
      className={className}
      href={linkTo}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default LinkWrapper
