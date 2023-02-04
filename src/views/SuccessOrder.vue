<template>
  <div class="success-order">
    <TheNavbar />
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col text-center">
                <img src="../assets/waiting.svg" class="mx-auto max-w-md"/>
                <h2><br><strong>Sukses!</strong></h2>
                <h4>Pesanan Anda sedang diproses <br>Mohon ditunggu</h4>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  name: "SuccessOrder",
  components: {
    TheNavbar,
  },
};
</script>

<style>
</style>