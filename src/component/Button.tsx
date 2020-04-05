import React from 'react'

const Button: React.FC<{ buttonText: string }> = ({ buttonText }) => {
  return (
    <div className="list">
      <div className="button-text">{buttonText}</div>
    </div>
  )
}

export default Button
