# graphql-vuex-orm

## Requirements
Expects that you have an 8base workspace setup with a Product table. Product schema currenlty looks like, 

```js
export default class Product extends Model {
  static entity = 'products'

  static fields () {
    return {
      id: this.attr(null),
      name: this.string(''),
      description: this.string(''),
      price: this.number()
    }
  }
}
```

## Getting Started
1. clone repo
2. copy dev.env as .env
3. enter in 8base workspace url and key
4. yarn && yarn dev

## What does it do?
1. Pulls in ProductsList as a gql query
2. Uses Product VuexOrm model to display ProductsList
3. Mutates the Product name based on form input
4. Demonstrates that Products list is reactive to the mutation and update
