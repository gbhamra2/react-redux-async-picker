import React from 'react'
import {connect} from 'react-redux'
import store from './FitmentStore'
import Picker from '../components/Picker'
import {loadOptions, yearPickerOptionChange, makePickerOptionChange, modelPickerOptionChange} from '../actions'

class FitmentForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    store.dispatch(loadOptions('years'));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    if (id === 'yearSelected') {
      store.dispatch(yearPickerOptionChange(value))
      store.dispatch(loadOptions('makes'))
    } else if (id === 'makeSelected') {
      store.dispatch(makePickerOptionChange(value))
      store.dispatch(loadOptions('models'))
    } else if (id === 'modelSelected') {
      store.dispatch(modelPickerOptionChange(value))
    }
  }

  handleSubmit(event) {
    console.log('Form submitted: ');
    console.log(store.getState());
    event.preventDefault();
}

  render() {
    const {
      yearSelected = '',
      makeSelected = '',
      modelSelected = '',
      yearOptions,
      makeOptions,
      modelOptions
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <Picker
          id="yearSelected"
          value={this.state.yearSelected}
          onChange={this.handleInputChange}
          options={this.state.yearOptions}
          />
          <br />
          <Picker
          id="makeSelected"
          value={this.state.makeSelected}
          onChange={this.handleInputChange}
          options={this.state.makeOptions}
          />
          <br />
          <Picker
          id="modelSelected"
          value={this.state.modelSelected}
          onChange={this.handleInputChange}
          options={this.state.modelOptions}
        /> */}
        <Picker
          id="yearSelected"
          value={yearSelected}
          onChange={this.handleInputChange}
          options={yearOptions}
        />
        <br />
        <Picker
          id="makeSelected"
          value={makeSelected}
          onChange={this.handleInputChange}
          options={makeOptions}
        />
        <br />
        <Picker
          id="modelSelected"
          value={modelSelected}
          onChange={this.handleInputChange}
          options={modelOptions}
        />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

const mapStateToProps = state => {

  const {
    pickerOptions
  } = state
  const {
    yearItems: yearOptions,
    yearItem: yearSelected,
    makeItems: makeOptions,
    makeItem: makeSelected,
    modelItems: modelOptions,
    modelItem: modelSelected
  } = pickerOptions || {
    yearItems: [],
    makeItems: [],
    modelItems: [],
    yearItem: '',
    makeItem: '',
    modelItem: ''
  }
  return {
    yearSelected,
    makeSelected,
    modelSelected,
    yearOptions,
    makeOptions,
    modelOptions
  }
}

export default connect(mapStateToProps)(FitmentForm)
