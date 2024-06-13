<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>SHOP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            {{Username}}
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
    data(){
      return{
        Username: ''
      }
    },
    created(){
      this.Username = localStorage.getItem("user");
    }
};
</script>

<style>
</style>