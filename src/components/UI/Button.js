import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = ({ onClick, btnText, type }) => (
  <button onClick={onClick} type={type}>
    {btnText}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
}

export default Button
