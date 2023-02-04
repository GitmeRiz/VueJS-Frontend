<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      class="thenav shadow-sm p-2 mb-4 rounded"
    >
      <div class="container hidden w-full md:block md:w-auto">
        <b-navbar-brand href="/">eRestoran </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <div>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >Products</router-link
              >
            </li>
          </b-navbar-nav>
        </div>

        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/addproduct"
              >Add Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/feedback">Feedback </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  nama: 'TheNavbar',
  data() {
    return {
      jumlahpesan: [],
    };
  },
};
</script>

<style>
</style>
