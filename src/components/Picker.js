import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ selected, onChange, options }) => (
  <span>
    <h1>{selected}</h1>
    <select onChange={e => onChange(e.target.value)} value={selected}>
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
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
