<template>
  <div class="home">
    <TheNavbar />
    <div class="container">
      <TheHero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="products" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Lihat Semua</router-link
          >
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
import TheHero from "@/components/TheHero.vue";
import TheProduct from "@/components/TheProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    TheNavbar,
    TheHero,
    TheProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://api.gitmeriz.my.id/bestproduct")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
