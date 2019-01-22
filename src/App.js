import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'react-materialize'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'

class App extends Component {
  state = {
    categories: [],
    recipes: [],
    myRecipes: [],
    search: ''
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(r => r.json())
    .then(result => {
      this.setState({
        categories: result.categories,
        filteredCategories: result.categories
      })
    })
  }

  getRecipes = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(r => r.json())
    .then(result => {
      const filteredResults = result.meals.filter(recipe =>
        !this.state.myRecipes.find(r => r.idMeal === recipe.idMeal)
      )

      this.setState({
        recipes: filteredResults
      })
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  addRecipe = (recipeId) => {
    const recipe = this.state.recipes.find(r => r.idMeal === recipeId)

    this.setState({
      myRecipes: [...this.state.myRecipes, recipe],
      recipes: this.state.recipes.filter(r => r !== recipe)
    })
  }

  removeRecipe = (recipeId) => {
    const recipe = this.state.myRecipes.find(r => r.idMeal === recipeId)

    this.setState({
      myRecipes: this.state.myRecipes.filter(r => r !== recipe),
      recipes: [...this.state.recipes, recipe]
    })
  }

  filteredCategories = () => {
    return this.state.categories.filter(c => c.strCategory.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} search={this.state.search} />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer
              categories={this.filteredCategories()}
              getRecipes={this.getRecipes}
            />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer
              recipes={this.state.recipes}
              updateRecipes={this.addRecipe}
            />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer
              recipes={this.state.myRecipes}
              updateRecipes={this.removeRecipe}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
