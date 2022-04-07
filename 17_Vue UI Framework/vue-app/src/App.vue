<template>
  <v-app id="app">
    <v-app-bar
      color="blue"
      dark
      fixed
      elevation="2"
    >
      <v-toolbar-title>News App</v-toolbar-title>
    </v-app-bar>

    <v-row class="mt-15">
      <v-col cols="auto">
        <v-navigation-drawer
          permanent
          class="pt-15"
          expand-on-hover
          fixed
          clipped
        >
          <v-list
            nav
            dense
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-handball</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Olahraga</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-chart-bar-stacked</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Bisnis</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-heart-pulse</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Kesehatan</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-airballoon</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Travel & Rekreasi</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
