import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.scss'

const Details = ({ title, date, image, description, details }) => (
  <section className="wrapper-details">
    <figure>
      <Link to="/contenidos">Volver</Link>
      <img src={image.source} alt={image.alt} />
    </figure>
    <article>
      <div>
        <span className="details-header">
          <h4>Titulo: {title}</h4>{' '}
          <strong>{date && `(${date.slice(0, 4)})`}</strong>
        </span>
        <div>
          <span>
            <strong>Descripcion: </strong> {description}
          </span>
        </div>
      </div>
      <div className="details-info">
        {details.map((detail) => (
          <div key={detail.id}>
            <p>{detail.title}</p>
            <ul>
              {detail.content.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  </section>
)

Details.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  details: PropTypes.array,
}

export default Details
