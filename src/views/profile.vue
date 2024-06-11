<template>
  <v-container class="pt-8">
    <v-card class="card-body mx-auto pt-4" max-width="600">
      <!-- <v-row justify="center" align="center">
        <v-avatar size="150">
          <v-img :src="user.avatar"></v-img>
        </v-avatar>
      </v-row> -->

      <cardImg />

      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <v-card-title class="text-h6 text-center"
            >ประวัติส่วนตัว</v-card-title
          >
        </v-col>
      </v-row>

      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ชื่อ - สกุล</v-list-item-title>
            <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Email</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cake</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>วันเเดือนปีเกิด</v-list-item-title>
            <v-list-item-subtitle>{{ user.birthday }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cards-playing</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>งานอดิเรก</v-list-item-title>
            <v-list-item-subtitle>{{ user.Hobby }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import cardImg from "../components/ImageCard.vue";
export default {
  components: {
    cardImg,
  },
  data() {
    return {
      university: "My University",
      user: {
        name: "Nattapot Areesuk",
        email: "nattapot.ar@inet.co.th",
        username: "Nattapot Areesuk",
        birthday: "11 กุมภาพันธ์ 2545",
        Hobby: "เล่นเกม",
        avatar:
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
      },
    };
  },
};
</script>

<style>
.card-body {
  flex: 1 1 auto;
  background-color: red;
}
</style>
