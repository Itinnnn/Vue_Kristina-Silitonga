<template>
  <div class="row">
    <div class="col-md-12">
      <div class="image-wrapper mb-3">
        <img class="img-fluid" :src="berita.urlToImage" />
      </div>
      <h3 class="text-center text-primary">{{ berita.title }}</h3>
      <div class="d-flex w-100 justify-content-between">
        <p>{{ berita.author }}</p>
        <p>{{ berita.publishedAt }}</p>
      </div>
      <p>{{ berita.content }}</p>
      <p>Lanjutkan baca : <a :href="berita.url">disini</a></p>
      <button class="btn btn-primary" @click="() => this.$router.go(-1)">
        Kembali
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBerita",

  computed: {
    listBerita: function () {
      return this.$store.state.listBerita.listBerita;
    },
    berita: function () {
      return this.$store.state.detailBerita.detailBerita;
    },
  },

  methods: {
    getDetailBerita() {
      return this.$store.dispatch(
        "detailBerita/setDetailBerita",
        this.listBerita[this.$route.params.index]
      );
    },
  },

  mounted() {
    this.getDetailBerita();
  },
};
</script>

<style scoped>
.image-wrapper {
  max-width: 800px;
}
</style>