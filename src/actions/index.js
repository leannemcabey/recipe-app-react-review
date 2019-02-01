import * as types from '../constants/ActionTypes'

export const setCategories = (categories) => {
  return {
    type: types.SET_CATEGORIES,
    payload: categories
  }
}

export const setRecipes = (recipes) => {
  return {
    type: types.SET_RECIPES,
    payload: recipes
  }
}

export const addRecipe = (recipe) => {
  return {
    type: types.ADD_RECIPE,
    payload: recipe
  }
}

export const removeRecipe = (recipe) => {
  return {
    type: types.REMOVE_RECIPE,
    payload: recipe
  }
}

export const searchCategories = (searchTerm) => {
  return {
    type: types.SEARCH_CATEGORIES,
    payload: searchTerm
  }
}
