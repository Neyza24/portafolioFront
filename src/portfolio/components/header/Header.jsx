import React, { useState } from 'react';
import './header.css'

const Header = () => {

  const [toggle, showMenu] = useState(false);
  

  return (
    <header className='header'>

      <nav className="nav container">

        <a href="#home" className="nav__logo">Front <span>Ney</span></a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link">Inicio</a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">Sobre mí</a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">Skills</a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">Proyectos</a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">Contacto</a>
            </li>
          </ul>

          <i className='bx bx-x nav__close' onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>

    </header>
  )
}

export default Header;