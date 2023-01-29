<template>
  <div>
    <TheNavbar />
      <div class="container d-flex flex-column">
        <div align="center" justify="space-around">
        <img src="../assets/Aboutus.svg"  />
      </div>
      <div>
        <br><br>
        <p><center>Kami adalah mahasiswa dari Institut Teknologi Telkom Surabaya</center></p>
        <p><center>Saat ini sedang menjalani semester 5</center></p>
        <p><center>Website eRestoran ini adalah hasil dari kerja sama kami untuk tugas akhir mata kuliah Pemrograman Web</center></p>
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