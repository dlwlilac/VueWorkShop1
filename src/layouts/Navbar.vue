<template>
  <div>
    <v-app-bar app flat color="white">
      <v-badge color="#D5F0DB" dot>
        <v-img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300"
          contain
          width="100"
        ></v-img>
      </v-badge>

      <v-toolbar-title class="ml-4">
        <span class="green--text">ไก่ชนนาทาน</span>
        <strong style="margin-left: 5px">STORE</strong>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-badge color="#FF6D59" overlap content="9+" class="mr-2 mt-1">
        <v-avatar color="#FFF0EE" size="40" @click="SoonLike()">
          <v-icon small class="btnNavbar" color="#FF6D59">mdi-heart</v-icon>
        </v-avatar>
      </v-badge>
      <v-badge color="#41AB55" overlap content="9+" class="mr-2 mt-1">
        <v-avatar color="#ECF7EE" size="40" @click="SoonCart()">
          <v-icon small class="btnNavbar" color="#41AB55"
            >mdi-cart-arrow-down</v-icon
          >
        </v-avatar>
      </v-badge> -->
      <span class="grey--text d-none d-sm-flex"
        >สวัสดีคุณ,
        <strong style="margin-left: 5px; margin-right: 5px"
          >ผู้ใช้งาน</strong
        ></span
      >
      <v-chip
        class="btnNavbar"
        style="margin-left: 8px; margin-right: 8px"
        color="primary"
        to="/apicon"
        >เข้าสู่ระบบ</v-chip
      >
      <v-avatar size="50" class="ml-2">
        <v-img
          src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blte2865cc2e9cd1407/63177fbd454b1c2ebb3f3589/2022_Promo_Elementalist-Lux_Ecomm_image10.png?auto=webp&width=694&quality=85"
        ></v-img>
      </v-avatar>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Username: "",
    };
  },
  created() {
    this.Username = localStorage.getItem("user");
  },
  methods: {
    // ManageProduct() {
    //   if (this.$route.path !== '/apicon' ) {
    //   this.$router.push("/apicon");
    //   }
    // },
    // BackHome() {
    //   if (this.$route.path !== '/' ) {
    //   this.$router.push("/");
    //   }
    // },
    SoonCart() {
      this.$swal.fire({
        icon: "info",
        title: "ตะกร้าสินค้า",
        text: " ยังไม่ทำครับบบบบ",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    },
    SoonLike() {
      this.$swal.fire({
        icon: "info",
        title: "สินค้าที่ชอบ",
        text: "ยังไม่ทำครับบบบบ",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    },
  },
};
</script>

<style>
</style>