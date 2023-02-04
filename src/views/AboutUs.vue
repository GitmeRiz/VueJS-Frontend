<template>
  <div>
    <TheNavbar />
      <div class="container d-flex flex-column">
        <div align="center" justify="space-around">
        <img src="../assets/Aboutus.svg"  />
      </div>
      <div>
        <br><br>
        <p class="text-center">Kami adalah mahasiswa dari Institut Teknologi Telkom Surabaya</p>
        <p class="text-center">Saat ini sedang menjalani semester 5</p>
        <p class="text-center">Website eRestoran ini adalah hasil dari kerja sama kami untuk tugas akhir mata kuliah Pemrograman Web</p>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  name: "AboutUs",
  components: {
    TheNavbar,
  },
};
</script>

<style>
</style>