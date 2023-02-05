<template>
  <div class="food-detail">
    <TheNavbar />
    <div class="container">
      <div class="row mt-2">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/products" class="text-dark"
                  >Products</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="makanan.url" class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ makanan.name }}</strong>
          </h2>
          <hr />
          <h4>
            Harga: <strong>Rp{{ makanan.harga }}</strong>
          </h4>
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlahpesan"
              />
              <div class="form-group">
                <label for="keterangan" class="mt-3">Keterangan</label>
                <textarea
                  v-model="pesan.keterangan"
                  class="form-control"
                  placeholder="Pedas, tambah nasi ..."
                ></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    TheNavbar,
  },
  data() {
    return {
      makanan: {},
      pesan: {},
    };
  },

  methods: {
    setMakanan(data) {
      this.makanan = data;
    },
    pemesanan() {
      if (this.pesan.jumlahpesan) {
        this.pesan.makanans = this.makanan;
        axios
          .post("http://localhost:3000/order", this.pesan)
          .then(() => {
            this.$router.push({ path: "/success-order" });
            this.$toast.success("Sukses Order", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setMakanan(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>