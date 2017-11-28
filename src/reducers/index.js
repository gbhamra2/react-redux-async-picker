import {combineReducers} from 'redux'
import {
  // SELECT_PICKER_TYPE,
  // REQUEST_OPTIONS,
  // RECEIVE_OPTIONS,
  // PICKER_OPTION_CHANGED,
  YEAR_PICKER_OPTION_CHANGED,
  MAKE_PICKER_OPTION_CHANGED,
  MODEL_PICKER_OPTION_CHANGED,
  GET_YEAR_PICKER_OPTIONS,
  GET_MAKE_PICKER_OPTIONS,
  GET_MODEL_PICKER_OPTIONS
} from '../actions'

// const selectedPickerType = (state = 'years', action) => {
//   switch (action.type) {
//     case SELECT_PICKER_TYPE:
//       return action.pickerType
//     case YEAR_PICKER_OPTION_CHANGED:
//       return 'makes'
//     case MAKE_PICKER_OPTION_CHANGED:
//       return 'models'
//     default:
//       return state
//   }
// }

const pickerOptions = (state = {
  yearItems: [],
  makeItems: [],
  modelItems: [],
  currentYearItem: '',
  currentMakeItem: '',
  currentModelItem: ''
}, action) => {
  switch (action.type) {
    case GET_YEAR_PICKER_OPTIONS:
      return {
        ...state,
        yearItems: action.options
      }
    case GET_MAKE_PICKER_OPTIONS:
      return {
        ...state,
        makeItems: action.options
      }
    case GET_MODEL_PICKER_OPTIONS:
      return {
        ...state,
        modelItems: action.options
      }
    case YEAR_PICKER_OPTION_CHANGED:
      return {
        ...state,
        currentYearItem: action.option
      }
    case MAKE_PICKER_OPTION_CHANGED:
      return {
        ...state,
        currentMakeItem: action.option
      }
    case MODEL_PICKER_OPTION_CHANGED:
      return {
        ...state,
        currentModelItem: action.option
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({pickerOptions})

export default rootReducer
