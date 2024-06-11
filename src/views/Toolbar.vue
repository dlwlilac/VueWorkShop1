<template>
  <div>
    <v-app-bar app dark>
  
      <v-spacer></v-spacer>

      <v-btn 
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">ออกจากระบบ</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>