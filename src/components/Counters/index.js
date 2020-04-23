import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'
import Button from '../UI/Button'

const Counters = ({ newCounter, counters, total }) => (
  <section className="counters-wrapper">
    <h2>Contadores</h2>
    <div className="new-counter">
      <Button
        onClick={newCounter}
        btnText="Crear nuevo contador"
        type="button"
      />
    </div>
    <article>
      {counters &&
        counters.map((counter) => (
          <div key={counter.id}>
            <Button
              onClick={() => counter.onClick(counter.id, --counter.value)}
              btnText="-"
              type="button"
            />
            <p>{counter.value}</p>
            <Button
              onClick={() => counter.onClick(counter.id, ++counter.value)}
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
  newCounter: PropTypes.func,
  countersList: PropTypes.array,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Counters
