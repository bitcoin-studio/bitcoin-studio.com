import React from 'react';

interface IBurgerProps {
  isMenuOpen: boolean;
  onToggleMenu: Function;
}

const Burger = ({ isMenuOpen, onToggleMenu }: IBurgerProps) => {
  return (
    <button
      aria-expanded={isMenuOpen}
      aria-label="Toggle menu"
      className={`menu-burger ${isMenuOpen && 'menu-burger--open'}`}
      onClick={() => onToggleMenu()}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default Burger