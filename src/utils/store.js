import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import listReducer from './appReducer'
 const listStore = createStore(listReducer,applyMiddleware(thunk))
 export default listStore
