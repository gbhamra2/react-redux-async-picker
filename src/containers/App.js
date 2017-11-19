import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectPickerType, loadOptions, pickerOptionChange } from '../actions'
import Picker from '../components/Picker'

class App extends Component {
  static propTypes = {
    selectedPickerType: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedPickerType } = this.props
    dispatch(loadOptions(selectedPickerType))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPickerType !== this.props.selectedPickerType) {
      const { dispatch, selectedPickerType } = nextProps
      dispatch(loadOptions(selectedPickerType))
    }
  }

  handleOptionChange = option => {
    this.props.dispatch(pickerOptionChange(this.props.selectedPickerType, option))
  }

  render() {
    const { selectedPickerType, options, selectedOption } = this.props
    return (
      <div>
        <Picker selected={selectedOption} onChange={this.handleOptionChange} options={options} />
        <Picker selected={selectedOption} onChange={this.handleOptionChange} options={options} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  const { selectedPickerType, pickerOptions } = state
  const {
    isFetching,
    items: options,
    currentItem: selectedOption
  } = pickerOptions[selectedPickerType] || {
    isFetching: true,
    items: [],
    currentItem: ''
  }

  return {
    selectedPickerType,
    options,
    selectedOption,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
