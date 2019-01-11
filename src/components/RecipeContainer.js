import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => <Recipe key={v4()} recipe={recipe} handleRecipeClick={this.props.handleRecipeClick}/>)}
      </div>
    )
  }
}

export default RecipeContainer
