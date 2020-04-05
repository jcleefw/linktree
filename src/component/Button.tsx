import React from 'react'

type ButtonProps = {
  buttonText: string
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <div className="list" onClick={onClick}>
      <div className="button-text">{buttonText}</div>
    </div>
  )
}

export default Button
