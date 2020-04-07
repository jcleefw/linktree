import React from 'react'

type ButtonProps = {
  buttonText: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button className="list" onClick={onClick}>
      <div className="button-text">{buttonText}</div>
    </button>
  )
}

export default Button
