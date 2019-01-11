import React from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'



const Category = (props) => {
  return (
    <Card
      header={<CardTitle key={v4()} image={props.category.strCategoryThumb} />}
      title={props.category.strCategory}
      actions={[<Button key={v4()} onClick={() => props.handleCategoryClick(props.category.strCategory)} waves='light'>Find Recipes</Button>]}
    >
      {/* category description here */}
    </Card>
  )
}

export default Category
