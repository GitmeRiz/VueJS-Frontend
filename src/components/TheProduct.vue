<template>
  <div>
    <div class="card shadow card-product">
      <img :src="product.url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Harga: Rp {{ product.harga }}</p>
        <router-link
        v-b-popover.hover.left="'Klik untuk order!'"
        class="btn btn-success ml-10"
        :to="'/products/' + product.id"
        ><b-icon-cart></b-icon-cart> Order</router-link
        >
        
      <b-dropdown
      v-b-popover.hover.right="'Klik untuk mengedit!'"
      id="dropdown-dropright"
      dropright
      text="More"
      variant="success"
      class="m-2 left-10"
      >
      <b-dropdown-item router-link :to="'/updateproduct/' + product.id"
      >Update</b-dropdown-item
      >
      <b-dropdown-item @click="hapusProducts(product.id)"
      >Delete</b-dropdown-item
      >
    </b-dropdown>
  </div>
</div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: "TheProduct",
  props: ["product"],

  methods: {

    hapusProducts(id) {
      axios
        .delete("http://localhost:3000/products/" + id)
        .then(() => {
            this.$router.push({ path: "/addproduct" });
            this.$toast.error("Sukses Hapus Product", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

        })
        .catch((error) => console.log(error));
    },

  },
}

</script>

<style>
</style>