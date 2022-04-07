<template>
  <div>
    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="7">
          <v-card
            width="100%"
            v-for="(berita, index) in listBerita"
            :key="index"
            class="mb-10"
            elevation="8"
          >
            <v-img
              :src="berita.urlToImage"
              max-height="300"
              sizes="cover"
            />
            <v-card-title>
              {{ berita.title }}
            </v-card-title>
            <v-card-text>
              <p style="color: black !important">
                {{ berita.description }}
              </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-btn
                    color="secondary"
                    :href="'https://' + berita.source.name"
                    small
                    rounded
                  >
                    {{ berita.source.name }}
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-row>
                    <v-col>
                      <v-icon color="red">mdi-reddit</v-icon>
                    </v-col>
                    <v-col>
                      <v-icon color="blue">mdi-twitter</v-icon>
                    </v-col>
                    <v-col>
                      <v-icon color="indigo">mdi-facebook</v-icon>
                    </v-col>
                    <v-col>
                      <v-icon color="deep-orange">mdi-google-plus</v-icon>
                    </v-col>
                    <v-col>
                      <v-icon color="blue accent-4">mdi-linkedin</v-icon>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    small
                    @click="redirectDetail(index)"
                  >
                    READ MORE
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DaftarBerita",

  computed: {
    listBerita() {
      return this.$store.state.listBerita.listBerita;
    },
  },

  methods: {
    getDataListBerita() {
      this.$store.dispatch("listBerita/fetchBerita", {
        params: {
          from: "2022-03-07",
          to: "2022-03-07",
          sortBy: "publishedAt",
          country: "id",
          apiKey: "2ddeba2597c24a05b0c461d469517349",
        },
      });
    },

    redirectDetail(routeParams) {
      return this.$router.push({
        name: "DetailBerita",
        params: {
          index: routeParams
        }
      })
    }
  },

  mounted() {
    this.getDataListBerita();
  },
};
</script>

<style scoped>
</style>