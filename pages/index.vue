<template>
  <div>
    <pre>{{ products }}</pre>
    <button @click="getData">GetData</button>

    <form @submit.prevent="changeName({ id: products[0].id, name: form.name })">
      <input v-model="form.name" />
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import apolloClient from '@/lib/apollo';
import gql from 'graphql-tag';

const query = gql`
  query MyQuery {
    productsList {
      items {
        id
        name
        price
        description
      }
    }
  }
`;
import Product from '@/models/product.js';

export default {
  data() {
    return {
      form: {
        name: '',
      },
    };
  },
  mounted() {},

  computed: {
    products() {
      return Product.all();
    },
  },

  methods: {
    getData() {
      apolloClient.query({ query }).then((res) => {
        Product.create({ data: res.data.productsList.items });
      });
    },

    changeName({ id, name }) {
      const query = gql`
        mutation ProductUpdate($id: ID!, $name: String) {
          productUpdate(data: {
            id: $id,
            name: $name
          }) {
            id
            name
          }
        }
      `;

      console.log(query);
      apolloClient
        .mutate({
          mutation: query,
          variables: {
            id, name
          }
        })
        .then((res) => {
          const product = Product.update({
            where: id,
            data: res.data.productUpdate
          })
        });
    },
  },
};
</script>
