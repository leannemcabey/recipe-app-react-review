import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'react-materialize'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'
import { connect } from 'react-redux'
import { addRecipe, removeRecipe } from './actions'

class App extends Component {

  addRecipe = (recipeId) => {
    const recipe = this.props.recipes.find(r => r.idMeal === recipeId)

    this.props.addRecipe(recipe)
  }

  removeRecipe = (recipeId) => {
    const recipe = this.props.myRecipes.find(r => r.idMeal === recipeId)

    this.props.removeRecipe(recipe)
  }

  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer
              recipes={this.props.recipes}
              updateRecipes={this.addRecipe}
            />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer
              recipes={this.props.myRecipes}
              updateRecipes={this.removeRecipe}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipe.recipes,
    myRecipes: state.recipe.myRecipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (recipe) => dispatch(addRecipe(recipe)),
    removeRecipe: (recipe) => dispatch(removeRecipe(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
