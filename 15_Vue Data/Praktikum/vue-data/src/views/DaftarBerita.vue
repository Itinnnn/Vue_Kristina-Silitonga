<template>
  <div class="row">
    <div class="col-md-12">
      <h3 class="text-center text-primary">Berita Terkini</h3>
    </div>

    <div class="row mt-3 ps-4">
      <div
        class="col-md-6 py-3 item-berita mb-3"
        @click="redirect(index)"
        v-for="(berita, index) in listBerita"
        :key="index"
      >
        <div class="d-flex w-100">
          <div class="col-auto">
            <div class="image-wrapper pt-1">
              <img class="img-fluid" :src="berita.urlToImage" />
            </div>
          </div>
          <div class="col ps-3">
            <p class="text-primary mb-1">
              <b>{{ berita.author }}</b>
            </p>
            <p class="text-primary mb-1">
              <b>{{ berita.title }}</b>
            </p>
            <p class="text-muted">{{ berita.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaftarBerita",

  computed: {
    listBerita: function () {
      return this.$store.state.listBerita.listBerita;
    },
  },

  methods: {
    getBerita() {
      return this.$store.dispatch("listBerita/fetchBerita", {
        params: {
          category: null,
          from: "2022-03-27",
          to: "2022-03-27",
          sortBy: "popularity",
          apiKey: "e3cbeb1138c242c59335b28b2993ff9f",
          country: "id",
        },
      });
    },

    redirect(paramIndex) {
      return this.$router.push({
        name: "DetailBerita",
        params: {
          index: paramIndex,
        },
      });
    },
  },

  mounted() {
    this.getBerita();
  },
};
</script>

<style scoped>
.image-wrapper {
  max-width: 150px;
  max-height: 100px;
}

.item-berita {
  cursor: pointer;
  background-color: rgb(227, 255, 249);
}
</style>