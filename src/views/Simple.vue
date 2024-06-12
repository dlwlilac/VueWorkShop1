<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="user.show">{{ user.name }}</h1>
    <v-btn color="success" @click="user.show = !user.show">test</v-btn>
    <v-row justify="center" align="center">
      <v-avatar size="150">
        <v-img width="300" src=""></v-img>
      </v-avatar>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Nattapot Areesuk",
        show: true,
        imgset: [
          {
            name: "cattttt",
            imglike:
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>