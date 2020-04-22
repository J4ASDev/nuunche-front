import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import Button from '../UI/Button'

const Counters = ({ countersList, total }) => (
  <section className="counters-wrapper">
    <h2>Contadores</h2>
    <article>
      {countersList.map((counter) => (
        <div>
          <Button
            onClick={() => counter.onClick(counter.id, --counter.count)}
            btnText="-"
            type="button"
          />
          <p>{counter.count}</p>
          <Button
            onClick={() => counter.onClick(counter.id, ++counter.count)}
            btnText="+"
            type="button"
          />
        </div>
      ))}
    </article>
    <p className="total-count">Suma total de todos los contadores: {total}</p>
  </section>
)

Counters.propTypes = {
  countersList: PropTypes.array,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Counters
