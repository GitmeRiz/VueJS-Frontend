<template>
  <div>
    <TheNavbar />

    <div class="container">
      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-80">
              <div class="justify-content-center align-self-center">
                <form class="mt-3" v-on:submit.prevent>
                  <div class="form-group">
                    <label for="nama">Nama: </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="submit.nama"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email: </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="submit.email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message">Message: </label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="submit.message"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-success-feedback float-right"
                    @click="kirim"
                  >
                    Submit
                  </button>
                  <br /><br />
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-8">
            <img src="../assets/feedback.svg" width="100%" />
          </div>
        </div>
      </div>

      <!-- <form class="mt-3" v-on:submit.prevent>
              <div class="form-group">
                <label for="nama">Nama: </label>
                <input type="text" class="form-control" v-model="submit.nama" />
              </div>
              <div class="form-group">
                <label for="email">Email: </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="submit.email"
                />
              </div>
              <div class="form-group">
                <label for="message">Message: </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="submit.message"
                />
              </div>
              <button
                type="submit"
                class="btn btn-success float-right"
                @click="kirim"
              >
                Submit
              </button>
              <br /><br />
            </form> -->
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import axios from "axios";
export default {
  name: "FeedBack",
  components: {
    TheNavbar,
  },
  data() {
    return {
      submit: {},
    };
  },

  methods: {

    kirim() {
      if (this.submit.nama && this.submit.email && this.submit.message) {
        this.submit.feedback = this.feedback;
        axios
          .post("http://localhost:3000/feedback", this.submit)
          .then(() => {
            this.$router.push({ path: "/" });
            this.$toast.success("Feedback sudah terkirim!", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
     }
     else {
        this.$toast.error("Kolom tidak boleh kosong!", {
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
