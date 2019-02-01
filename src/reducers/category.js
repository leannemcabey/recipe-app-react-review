import {
  SET_CATEGORIES,
  SEARCH_CATEGORIES
} from '../constants/ActionTypes'

const initialState = {
  categories: [],
  search: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case SEARCH_CATEGORIES:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}
