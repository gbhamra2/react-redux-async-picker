export const REQUEST_OPTIONS = 'REQUEST_OPTIONS'
export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS'
export const SELECT_PICKER_TYPE = 'SELECT_PICKER_TYPE'
export const PICKER_OPTION_CHANGED = 'PICKER_OPTION_CHANGED'

export const pickerOptionChange = (pickerType, option) => ({
  type: PICKER_OPTION_CHANGED,
  option,
  pickerType
})

export const selectPickerType = (pickerType = 'years') => ({
  type: SELECT_PICKER_TYPE,
  pickerType
})

export const requestOptions = pickerType => ({
  type: REQUEST_OPTIONS,
  pickerType
})

export const receiveOptions = (pickerType, json) => ({
  type: RECEIVE_OPTIONS,
  pickerType,
  options: json.map(obj => obj.key)
})

export const loadOptions = pickerType => dispatch => {
  dispatch(requestOptions(pickerType))
  return fetch(`http://localhost:5000/${pickerType}`)
    .then(response => response.json())
    .then(json => dispatch(receiveOptions(pickerType, json)))
}
