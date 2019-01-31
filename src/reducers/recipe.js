import {
  SET_RECIPES,
  ADD_RECIPE,
  REMOVE_RECIPE
} from '../constants/ActionTypes'

const initialState = {
  recipes: [],
  myRecipes: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe !== action.payload),
        myRecipes: [...state.myRecipes, action.payload]
      }
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        myRecipes: state.myRecipes.filter(recipe => recipe !== action.payload)
      }
    default:
      return state
  }
}
