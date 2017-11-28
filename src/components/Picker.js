import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ id, onChange, options }) => (
  <span>
    <h1>{id}</h1>
    <select id={id} onChange={e => onChange(e)}>
      <option></option>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)
      }
    </select>
  </span>
)

Picker.propTypes = {
  options: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Picker
