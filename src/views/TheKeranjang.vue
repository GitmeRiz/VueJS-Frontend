<template>
  <div class="keranjang">
    <TheNavbar :updateKeranjang="keranjang" />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/makanan" class="text-dark">Makanan</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/minuman" class="text-dark">Minuman</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
            </ol>
          </nav>
        </div>
      </div>


      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(krjg, index) in keranjang" :key="krjg.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + krjg.makanans.image"
                      class="img-fluid shadow"
                    />
                  </td>
                  <td>{{ krjg.makanans.name }}</td>
                  <td>{{ krjg.keterangan ? krjg.keterangan : "-" }}</td>
                  <td>{{ krjg.jumlah_pemesanan }} </td>
                  <td align="right">Rp{{ krjg.makanans.harga }} </td>
                  <td align="right">
                    <strong
                      >Rp{{
                        krjg.makanans.harga * krjg.jumlah_pemesanan
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="hapusKeranjang(krjg.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga: </strong>
                  </td>
                  <td align="right">
                    <strong>Rp{{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama: </label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja: </label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
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
  name: "TheKeranjang",
  components: {
    TheNavbar,
  },
  data() {
    return {
      keranjang: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjang = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjang/" + id)
        .then(() => {
          this.$toast.error("Sukses Hapus Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          //   Update Data Keranjang
          axios
            .get("http://localhost:3000/keranjang/")
            .then((response) => this.setKeranjang(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {
        this.pesan.keranjang = this.keranjang;
        axios
          .post("http://localhost:3000/orders", this.pesan)
          .then(() => {
            // Hapus Semua Keranjang
            this.keranjang.map(function (item) {
              return axios
              .delete("http://localhost:3000/keranjang/" + item.id)
                .catch((error) => console.log(error));
            });
            this.$router.push({ path: "/success-order/" });
            this.$toast.success("Sukses Dipesan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Nama dan Nomor Meja Harus diisi", {
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
      .get("http://localhost:3000/keranjang")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjang.reduce(function (items, data) {
        return items + data.makanans.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>