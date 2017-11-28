// export const REQUEST_OPTIONS = 'REQUEST_OPTIONS'
// export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS'
export const SELECT_PICKER_TYPE = 'SELECT_PICKER_TYPE'
// export const PICKER_OPTION_CHANGED = 'PICKER_OPTION_CHANGED'
export const GET_YEAR_PICKER_OPTIONS = 'GET_YEAR_PICKER_OPTIONS'
export const GET_MAKE_PICKER_OPTIONS = 'GET_MAKE_PICKER_OPTIONS'
export const GET_MODEL_PICKER_OPTIONS = 'GET_MODEL_PICKER_OPTIONS'
export const YEAR_PICKER_OPTION_CHANGED = 'YEAR_PICKER_OPTION_CHANGED'
export const MAKE_PICKER_OPTION_CHANGED = 'MAKE_PICKER_OPTION_CHANGED'
export const MODEL_PICKER_OPTION_CHANGED = 'MODEL_PICKER_OPTION_CHANGED'
// export const INIT_APP = 'INIT_APP'

// export const pickerOptionChange = (pickerType, option) => ({
//   type: PICKER_OPTION_CHANGED,
//   option,
//   pickerType
// })
// export const initalizeApplication = x => ({
//   type: INIT_APP,
//   x: loadOptions(x)
// })

export const getYearPickerOptions = json => ({
  type: GET_YEAR_PICKER_OPTIONS,
  options: json.map(obj => obj.key)
})

export const getMakePickerOptions = json => ({
  type: GET_MAKE_PICKER_OPTIONS,
  options: json.map(obj => obj.key)
})

export const getModelPickerOptions = json => ({
  type: GET_MODEL_PICKER_OPTIONS,
  options: json.map(obj => obj.key)
})

export const yearPickerOptionChange = option =>  ({
  type: YEAR_PICKER_OPTION_CHANGED,
  option
})

export const makePickerOptionChange = option => ({
  type: MAKE_PICKER_OPTION_CHANGED,
  option
})

export const modelPickerOptionChange = option => ({
  type: MODEL_PICKER_OPTION_CHANGED,
  option
})

export const selectPickerType = pickerType => ({
  type: SELECT_PICKER_TYPE,
  pickerType
})
//
// export const requestOptions = pickerType => ({
//   type: REQUEST_OPTIONS,
//   pickerType
// })
//
// export const receiveOptions = (pickerType, json) => ({
//   type: RECEIVE_OPTIONS,
//   pickerType,
//   options: json.map(obj => obj.key)
// })

export const loadOptions = pickerType => dispatch => {
  if (pickerType === 'years') {
    return fetch(`http://localhost:5000/${pickerType}`)
      .then(response => response.json())
      .then(json => dispatch(getYearPickerOptions(json)))
  } else if (pickerType === 'makes') {
    return fetch(`http://localhost:5000/${pickerType}`)
      .then(response => response.json())
      .then(json => dispatch(getMakePickerOptions(json)))
  } else if (pickerType === 'models') {
    return fetch(`http://localhost:5000/${pickerType}`)
      .then(response => response.json())
      .then(json => dispatch(getModelPickerOptions(json)))
  }
  // dispatch(requestOptions(pickerType))
  // return fetch(`http://localhost:5000/${pickerType}`)
  //   .then(response => response.json())
  //   .then(json => dispatch(receiveOptions(pickerType, json)))
}
