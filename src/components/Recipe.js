import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {
  return (
    <Card
      header={<CardTitle key={v4()} image={props.recipe.strMealThumb} />}
      title={props.recipe.strMeal}
      onClick={() => props.handleRecipeClick(props.recipe.strMeal)}
    />
  )
}

export default Recipe
