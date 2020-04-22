import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import Button from '../UI/Button'

const Home = ({ onHandleButton }) => (
  <section className="start-wrapper">
    <article>
      <div className="start-text">
        <h2>Prueba de Nunchee - Jonathan Araujo</h2>
        <div>
          <p>Esta prueba esta compuesta por 3 secciones:</p>
          <ul>
            <li>
              <strong>Contenidos:</strong> Carousel con distintos multimedias
              disponibles.
            </li>
            <li>
              <strong>Detalles:</strong> Detalles de un multimedia seleccionado
              en el carousel.
            </li>
            <li>
              <strong>Contadores:</strong> Vista con 3 contadores distintos y
              una suma total entre ellos.
            </li>
          </ul>
        </div>
        <div>
          <p>Tecnologias usadas:</p>
          <ul>
            <li>
              <strong>Principales:</strong> react, redux, react-router.
            </li>
            <li>
              <strong>Soporte:</strong> prop-types, node-sass, axios,
              react-responsive-carousel.
            </li>
          </ul>
        </div>
        <div>
          <strong>Nota: </strong>
          <span>Muchas gracias por descargate el proyecto.</span>
        </div>
      </div>
      <Button onClick={onHandleButton} btnText="Empezar" type="button" />
    </article>
  </section>
)

Home.propTypes = {
  onHandleButton: PropTypes.func,
}

export default Home
