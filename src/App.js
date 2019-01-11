import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {
  state = {
    categories: [],
    recipes: [],
    myRecipes: [],
    filterInput: '',
    filteredCategories: []
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(result => result.json())
    .then(categories => this.setState({
      categories: categories.categories,
      filteredCategories: categories.categories
    }))
  }

  handleCategoryClick = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(result => result.json())
    .then(meals => this.setState({recipes: meals.meals}))
  }

  handleRecipeClick = (name) => {
    let clickedRecipe = this.state.recipes.find(recipe => recipe.strMeal === name)
    let filteredRecipes = this.state.recipes.filter(recipe => recipe.strMeal !== name)
    this.setState({
      recipes: filteredRecipes,
      myRecipes: [...this.state.myRecipes, clickedRecipe]
    })
  }

  handleMyRecipeClick = (name) => {
    let clickedRecipe = this.state.myRecipes.find(recipe => recipe.strMeal === name)
    let filteredMyRecipes = this.state.myRecipes.filter(recipe => recipe.strMeal !== name)
    this.setState({
      recipes: [...this.state.recipes, clickedRecipe],
      myRecipes: filteredMyRecipes
    })
  }

  handleFilter = (event) => {
    this.setState({
      filterInput: event.target.value
    }, () => {
      let filteredCategories = this.state.categories.filter(category => category.strCategory.toLowerCase().includes(this.state.filterInput.toLowerCase()))
      this.setState({filteredCategories})
    })
  }

  render() {
    return (
      <div>
        <Header filterInput={this.state.filterInput} handleFilter={this.handleFilter}/>

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
          <CategoryContainer categories={this.state.filteredCategories} handleCategoryClick={this.handleCategoryClick}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
          <RecipeContainer recipes={this.state.recipes} handleRecipeClick={this.handleRecipeClick}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
          <RecipeContainer recipes={this.state.myRecipes} handleRecipeClick={this.handleMyRecipeClick}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
