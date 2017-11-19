import { combineReducers } from 'redux'
import { SELECT_PICKER_TYPE, REQUEST_OPTIONS, RECEIVE_OPTIONS, PICKER_OPTION_CHANGED } from '../actions'

const selectedPickerType = (state = 'years', action) => {
  switch (action.type) {
    case SELECT_PICKER_TYPE:
      return action.pickerType
    default:
      return state
  }
}

const options = (state ={
  isFetching: false,
  items: [],
  currentItem: ''
}, action) => {
  switch (action.type) {
    case REQUEST_OPTIONS:
      return {
        ...state,
        isFetching: true,
        currentItem: ''
      }
    case RECEIVE_OPTIONS:
      return {
        ...state,
        isFetching: false,
        items: action.options,
        currentItem: action.options[0]
      }
    case PICKER_OPTION_CHANGED:
      return {
        ...state,
        isFetching: false,
        currentItem: action.option
      }
    default:
      return state
  }
}

const pickerOptions = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_OPTIONS:
    case REQUEST_OPTIONS:
    case PICKER_OPTION_CHANGED:
      return {
        ...state,
        [action.pickerType]: options(state[action.pickerType], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedPickerType,
  pickerOptions
})

export default rootReducer
