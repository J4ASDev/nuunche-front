import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

const ContentList = ({ playlist }) => (
  <div>
    <h2>Lista de contenidos</h2>
    <section className="wrapper-content-list">
      <div className="wrapper-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {playlist &&
            playlist.length >= 1 &&
            playlist.map(({ id, title, source, description }) => (
              <div key={id}>
                <div className="text-media">
                  <h5 className="title">{title}</h5>
                  <p>{description}</p>
                  <Link to={`/contenidos/detalle/${id}`}>Ver detalles.</Link>
                </div>
                <Link to={`/contenidos/detalle/${id}`}>
                  <div>
                    <img src={source} alt={title} />
                  </div>
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    </section>
  </div>
)

ContentList.propTypes = {
  playlist: PropTypes.array,
}

export default ContentList
