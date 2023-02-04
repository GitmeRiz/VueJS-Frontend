<template>
  <div class="hero">
    <!-- Desktop -->
    <!-- <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Order Your</strong><br />Daily Menu</h2>
              <p>Choose yours, and eat it!</p>
              <router-link class="btn btn-lg btn-success" to="/products">
                <b-icon-arrow-right></b-icon-arrow-right>Order
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 ml-8" >
          <img src="../assets/hero.png" width="100%"/>
        </div>
      </div>  
    </div> -->

    <figure class="relative">
      <img
        class="rounded-xl h-auto max-w-full mx-auto"
        src="../assets/Land.png"
        alt="Food Image"
      />
      <figcaption class="absolute ml-2 px-4 text-lg text-white bottom-4 ">
        <h2 class="text-gray-300"><strong>Order Your</strong><br />Daily Menu</h2>
        <p class="  ">Choose yours, and eat it!</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "TheHero",
};
</script>

<style>
</style>