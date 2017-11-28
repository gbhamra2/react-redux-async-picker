import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // DON'T USE REACT-THUNK!!!
import { createLogger } from 'redux-logger'
import reducer from '../reducers'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store

// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import rootReducer from '../reducers'
//
// export const history = createHistory()
//
// const initialState = {
//
//   counter: 0,
//   year:'2015',
//   years:''
//
// }
// const enhancers = []
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ]
//
// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }
//
// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// )
//
// export default store
