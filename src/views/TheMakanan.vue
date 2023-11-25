<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Products <strong>List</strong></h2>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <TheProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavbar from "@/components/TheNavbar.vue";
import TheProduct from "@/components/TheProduct.vue";
import axios from "axios";

export default {
  name: "TheMakanan",
  components: {
    TheNavbar,
    TheProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://api.gitmeriz.my.id/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
