<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Products <strong>List</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-search />
            </span>
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            @keyup="searchFood"
          />


          </div>
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
      search: '',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood(){
      axios
      .get("http://localhost:3000/products?q=" + this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>


<style>
</style>