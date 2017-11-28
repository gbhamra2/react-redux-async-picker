import React, {Component} from 'react'
import { Provider } from 'react-redux'
import store from './FitmentStore'
import FitmentForm from './FitmentForm'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <FitmentForm />
        </div>
      </Provider>
    )
  }
}

export default App
