<template>
  <div>
    <TheNavbar />

    <div class="container mx-auto">
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
                Update Product
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <form @submit.prevent="updateFile" enctype="multipart/form-data">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Update Makanan</label
          >
          <input
            v-model="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sate"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="harga"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Update Harga</label
          >
          <input
            v-model="harga"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="10000"
            required
          />
        </div>

        <div>
          <label for="file" class="label">Upload File</label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file"
            ref="file"
            @change="selectedFile"
          />
        </div>

        <div class="mt-6">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

import axios from "axios";
export default {
  name: "UpdateProduct",
  components: {
    TheNavbar,
  },
  data() {
    return {
      file: "",
      title: "",
      harga: "",
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    async updateFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("title", this.title);
      formData.append("harga", this.harga);

      try {
        await axios.patch(
          "https://api.gitmeriz.my.id/" + this.$route.params.id,
          formData
        );
        this.$router.push({ path: "/products" });
        this.$toast.success("Berhasil memperbarui product!", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      } catch (error) {
        console.error(error);
        this.$toast.error("Gagal memperbarui product!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
};
</script>

<style></style>
