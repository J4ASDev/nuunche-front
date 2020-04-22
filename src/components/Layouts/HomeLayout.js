import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import { urlLogoNunchee } from '../../lib/consts'
import './styles.scss'

const HomeLayout = ({ children }) => (
  <Fragment>
    <div className="home-wrapper">
      <header>
        <Link to="/">
          <figure className="wrapper-logo">
            <img src={urlLogoNunchee} alt="nunchee-logo" />
          </figure>
        </Link>
        <ul className="wrapper-menu">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/contenidos">Contenidos</NavLink>
          </li>
          <li>
            <NavLink to="/contadores">Contadores</NavLink>
          </li>
        </ul>
      </header>
      <div className="wrapper-content">{children}</div>
      <footer>Jonathan Araujo - NUNCHEE TEST</footer>
    </div>
    <div className="home-gradient-header" />
  </Fragment>
)

HomeLayout.propTypes = {
  children: PropTypes.node,
}

export default HomeLayout
