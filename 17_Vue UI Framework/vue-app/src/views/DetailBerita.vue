<template>
  <div>

    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="10">
          <v-card
            width="100%"
            class="mb-10"
            elevation="8"
          >
            <v-card-title>
              {{ berita.title }}
            </v-card-title>
            <v-card-subtitle>
              Author : {{ berita.author }}
            </v-card-subtitle>
            <v-img
              :src="berita.urlToImage"
              max-height="300"
              sizes="cover"
            />
            <v-card-subtitle>
              {{ moment(berita.publishedAt).locale('id').format("dddd, Do MMMM YYYY - h:mm:ss") }}
            </v-card-subtitle>
            <v-card-text>
              <p style="color: black !important">
                {{ berita.description }}
              </p>
              <p style="color: black !important">
                {{ berita.content }}
              </p>
              <p style="color: black !important">
                Lebih lengkapnya lihat <a :href="berita.url">disini</a>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="() => this.$router.go(-1)">Kembali</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "DetailBerita",

  computed: {
    listBerita() {
      return this.$store.state.listBerita.listBerita;
    },
    berita() {
      return this.$store.state.detailBerita.detailBerita;
    }
  },

  methods: {
    fetchDetailBerita() {
      return this.$store.dispatch("detailBerita/getBerita", this.listBerita[this.$route.params.index])
    }
  },

  mounted() {
    this.fetchDetailBerita()
  },
}
</script>

<style scoped>
</style>