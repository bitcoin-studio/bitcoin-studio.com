import React, {FC} from 'react'

type Props = {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const Burger: FC<Props> = ({isMenuOpen, onToggleMenu}) => {
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