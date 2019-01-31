import { combineReducers } from 'redux'
import category from './category'
import recipe from './recipe'

const rootReducer = combineReducers({
  category,
  recipe
})

export default rootReducer
