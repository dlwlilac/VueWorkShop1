<template>
  <v-row justify="center" class="space px-16">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(product, i) in products"
      :key="i"
    >
      <v-card class="Card mx-auto rounded-xl" max-width="450" color="">
        <div align="center" justify="center">
          <v-img
            max-height="300"
            max-width="300"
            contain
            :src="product.img"
          ></v-img>
        </div>

        <v-card-title class="">{{ product.productName }}</v-card-title>
        <v-card-title
          class="textDetails grey--text text-grey-darken-1 mt-n6 small-text"
        >
          {{ product.Detail }}
        </v-card-title>
        <v-card-title class="mt-n4">{{ product.price }} </v-card-title>
        

        <v-card-actions class="mx-2 mt-n4">
          <v-spacer></v-spacer>
          <v-avatar color="#ECF7EE" size="40" @click="Soon()">
            <v-icon class="btn" color="#41AB55">mdi-cart-arrow-down</v-icon>
          </v-avatar>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    bpm: 1,
    products: [
      {
        img: "img/Sylas.png",
        productName: "Sylas Figure",
        Detail: "Figure is number #13 in Series 4",
        price: "$29.99",
      },
      {
        img: "img/Porcelain_Lux.png",
        productName: "Porcelain Lux Figure",
        Detail: "SPECIAL EDITION",
        price: "$34.99",
      },
      {
        img: "img/Yone.png",
        productName: "Yone Figure",
        Detail: "Yone Figure is #16 in Series 4",
        price: "$34.99",
      },
      {
        img: "img/Space-Groove-Blitz.png",
        productName: "Space Groove Blitzcrank XL Figure",
        Detail: "Space Groove Blitzcrank XL Figure is number #19 in Series 4",
        price: "$40",
      },
      {
        img: "img/OrnnXL.png",
        productName: "Ornn Figure XL",
        Detail: "Ornn Figure XL is number #10 in Series 4",
        price: "$35",
      },
      {
        img: "img/Kayn.png",
        productName: "Kayn Figure",
        Detail: "Kayn Figure is number #08 in Series 4",
        price: "$30",
      },
    ],
  }),
  methods: {
    Soon() {
      this.$swal.fire({
        icon: "info",
        title: "เพิ่มลงตะกร้าสินค้า",
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
.btn {
  cursor: pointer;
  border: none;
}
.btn:hover {
  transform: translateY(-5px);
}
.Card {
  cursor: pointer;
  border: none;
  box-shadow: 13px 13px 26px #5a5a5a, -13px -13px 26px #ffffff;
}
.Card:hover {
  transform: translateY(-8px);
}
.small-text {
  font-size: 14px;
}
</style>