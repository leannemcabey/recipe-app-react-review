import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'react-materialize'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'
import { connect } from 'react-redux'
import { setCategories, setRecipes, addRecipe, removeRecipe } from './actions'

class App extends Component {
  state = {
    search: ''
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(r => r.json())
    .then(result => {
      this.props.setCategories(result.categories)
    })
  }

  getRecipes = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(r => r.json())
    .then(result => {
      // const filteredResults = result.meals.filter(recipe =>
      //   !this.state.myRecipes.find(r => r.idMeal === recipe.idMeal)
      // )

      this.props.setRecipes(result.meals)
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  addRecipe = (recipeId) => {
    const recipe = this.props.recipes.find(r => r.idMeal === recipeId)
    this.props.addRecipe(recipe)
    // this.setState({
    //   myRecipes: [...this.state.myRecipes, recipe],
    //   recipes: this.state.recipes.filter(r => r !== recipe)
    // })
  }

  removeRecipe = (recipeId) => {
    const recipe = this.props.myRecipes.find(r => r.idMeal === recipeId)
    this.props.removeRecipe(recipe)
    // this.setState({
    //   myRecipes: this.state.myRecipes.filter(r => r !== recipe),
    //   recipes: [...this.state.recipes, recipe]
    // })
  }

  filteredCategories = () => {
    return this.props.categories.filter(c => c.strCategory.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    console.log(this.props)
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
    categories: state.category.categories,
    recipes: state.recipe.recipes,
    myRecipes: state.recipe.myRecipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) => dispatch(setCategories(categories)),
    setRecipes: (recipes) => dispatch(setRecipes(recipes)),
    addRecipe: (recipe) => dispatch(addRecipe(recipe)),
    removeRecipe: (recipe) => dispatch(removeRecipe(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
