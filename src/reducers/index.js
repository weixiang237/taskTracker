import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import status from './statusReducer'

const rootReducer = combineReducers({
    routing: routerReducer,
    status
  })
  
  export default rootReducer
  