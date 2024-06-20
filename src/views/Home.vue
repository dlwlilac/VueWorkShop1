<template>
  <v-app >
    <Navbar />
    <v-container fluid class="backgroundImage">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img
              class="image"
              src="img/BG.png"
              max-height="720px"
              max-width="100%"
            >
              <v-card-title class="top ml-10">
                <strong class="TitleShop">Shop..... </strong>
              </v-card-title>
              <v-card-title class="ml-10 mt-n8">
                <h2 class="TitleShop2">Store</h2>
              </v-card-title>
              <!-- <v-card-text class="ml-10">
                <h3 class="green--text">#เทส</h3>
              </v-card-text> -->
              <!--  -->
            </v-img>
          </v-card>
          <v-toolbar flat color="transparent">
            <v-toolbar-title><h3>หมวดหมู่</h3></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#1007C2">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>

          <Category />

          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title
              ><h3>
                สินค้าแนะนำ
                <h6 style="color: red">
                  ข้อมูลจำลอง หน้านี้ยังไม่ดึงข้อมูลจากฐานข้อมูลมาแสดง
                </h6>
              </h3></v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn rounded color="primary" @click="Soon()" dark class="px-8"
              >ดูทั้งหมด</v-btn
            >
          </v-toolbar>
          <Product />
          <v-card flat color="#1007C2" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../layouts/Navbar";
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";

export default {
  components: {
    Navbar,
    Category,
    Product,
  },
  methods: {
    Soon() {
      this.$swal.fire({
        icon: "info",
        title: "ยังไม่ทำครับ",
        text: " ยังไม่ทำครับบบบบ",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    },
  },
};
</script>

<style>
.TitleShop {
  margin-top: 120px;
  font-size: 100px;
  /* margin-left: 50px; */
  color: white;
}
.TitleShop2 {
    font-size: 40px;
    margin-top: 40px;
    color: white;
  }

.v-card.borderme {
  border: 2px solid green !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px) {
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>