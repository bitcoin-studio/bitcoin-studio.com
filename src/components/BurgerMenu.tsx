import React from 'react'

type Props = {
  isMenuOpen: boolean
  onToggleMenu: Function
}

export const Burger: React.FunctionComponent<Props> = ({isMenuOpen, onToggleMenu}) => {
  return (
    <button
      aria-expanded={isMenuOpen}
      aria-label="Toggle menu"
      className={`menu-burger ${isMenuOpen && 'menu-burger--open'}`}
      onClick={() => onToggleMenu()}
    >
      <span/>
      <span/>
      <span/>
    </button>
  )
}