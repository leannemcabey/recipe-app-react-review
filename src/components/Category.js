import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

class Category extends React.Component {
  getRecipes = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(r => r.json())
    .then(result => {
      const filteredResults = result.meals.filter(recipe =>
        !this.props.myRecipes.find(r => r.idMeal === recipe.idMeal)
      )

      this.props.setRecipes(filteredResults)
    })
  }

  render() {
    return (
      <Card
        key={v4()}
        header={<CardTitle key={v4()} image={this.props.strCategoryThumb} />}
        title={this.props.strCategory}
        actions={[<Button key={v4()} onClick={() => this.getRecipes(this.props.strCategory)} waves='light'>Find Recipes</Button>]}
      >
        {this.props.strCategoryDescription}
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myRecipes: state.recipe.myRecipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipes: (recipes) => dispatch(setRecipes(recipes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
