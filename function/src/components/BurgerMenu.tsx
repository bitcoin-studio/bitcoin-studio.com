import React from 'react'

type Props = {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const Burger: React.FC<Props> = ({isMenuOpen, onToggleMenu}) => (
  <button
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
    className={`menu-burger ${isMenuOpen && 'menu-burger--open'}`}
    onClick={() => onToggleMenu()}
    type="button"
  >
    <span/>
    <span/>
    <span/>
  </button>
)
