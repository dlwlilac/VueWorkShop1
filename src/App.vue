<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

* {
  font-family: "Mali", sans-serif;
}

.backgroundImage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("../src/assets/img-headerbg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  flex-direction: column;
}

.textDetails {
   font-size: 6px;
}
</style>
