<template>
  <v-row justify="center" class="space px-16">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(product, i) in filteredProducts"
      :key="i"
    >
      <v-card class="Card mx-auto rounded-xl" max-width="450" color="" > 
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
          {{ product.Detail | truncate(40, " ...") }}
        </v-card-title>
        <v-card-title class="mt-n4">{{ product.price }} </v-card-title>

        <v-card-actions class="mx-2 mt-n4">
          <v-spacer></v-spacer>
          <v-avatar class="mr-2 mt-1" color="#FFF0EE" size="40" @click="Soon()">
            <v-icon small class="btn" color="#FF6D59">mdi-heart</v-icon>
          </v-avatar>
          <v-avatar class="mr-2 mt-1" color="#ECF7EE" size="40" @click="Soon()">
            <v-icon class="btn" color="#41AB55">mdi-cart-arrow-down</v-icon>
          </v-avatar>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    selectedCategory: {
      type: String,
      default: "",
    },
  },
  watch: {
    selectedCategory(newVal) {
      console.log("Products received new category:", newVal); // เพิ่ม watcher นี้
    },
  },
  data: () => ({
    bpm: 1,
    products: [
      {
        img: "img/Sylas.png",
        productName: "Sylas Figure",
        Detail: "Figure is number #13 in Series 4",
        price: "$29.99",
        type: "Figure",
      },
      {
        img: "img/Porcelain_Lux.png",
        productName: "Porcelain Lux Figure",
        Detail: "SPECIAL EDITION",
        price: "$34.99",
        type: "Figure",
      },
      {
        img: "img/Yone.png",
        productName: "Yone Figure",
        Detail: "Yone Figure is #16 in Series 4",
        price: "$34.99",
        type: "Figure",
      },
      {
        img: "img/Space-Groove-Blitz.png",
        productName: "Space Groove Blitzcrank XL Figure",
        Detail: "Space Groove Blitzcrank XL Figure is number #19 in Series 4",
        price: "$40",
        type: "Figure",
      },
      {
        img: "img/OrnnXL.png",
        productName: "Ornn Figure XL",
        Detail: "Ornn Figure XL is number #10 in Series 4",
        price: "$35",
        type: "Figure",
      },
      {
        img: "img/Kayn.png",
        productName: "Kayn Figure",
        Detail: "Kayn Figure is number #08 in Series 4",
        price: "$30",
        type: "Figure",
      },
      {
        img: "img/nunu.png",
        productName: "NUNU & WILLUMP",
        Detail: "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a monster - only to discover that the beast, a lonely and magical yeti, merely needed a friend.",
        price: "$129.99",
        type: "Statues",
      },
      {
        img: "img/Ahri_Faker.png",
        productName: "Ahri HALL OF LEGENDS 2024",
        Detail: "FIRST AMONG LEGENDS Lol Esports' Hall of Legends commemorates the best of the best: players who have forever shaped our game, sport, and community.",
        price: "$299.99",
        type: "Statues",
      },
      {
        img: "img/Statues.png",
        productName: "PUREARTS JINX AND VI",
        Detail: "If Vi stands for violence and Jinx stands for Jinx (durr), the PureArts Jinx and Vi 1/6 Scale Statue Bundle stands for value!",
        price: "$549.99",
        type: "Statues",
      },
      {
        img: "img/Aatrox.png",
        productName: "JIMEI PALACE AATROX 1/6 SCALE",
        Detail: "Once a mighty Shuriman champion remade as an Ascended, Aatrox helped halt the onslaught of the Void during the Icathian rebellion. However, in time, with no monarch or existential threat to defend against, Aatrox and the other Sunborn began to clash in a war for the ruins of the world.",
        price: "$489.99",
        type: "Statues",
      },
      {
        img: "img/Kindred.png",
        productName: "SPIRIT BLOSSOM KINDRED",
        Detail: "On the eve of the Spirit Blossom festival, the veil between the mortal world and the Spirit Realm is at its weakest. Cross over and enlist the help of Spirit Blossom Kindred to venture back to the world of the living!",
        price: "$475",
        type: "Statues",
      },
      
      
    ],
  }),
  computed: {
    filteredProducts() {
      console.log("Filtering products for category:", this.selectedCategory);
      if (!this.selectedCategory || this.selectedCategory === "All") {
        return this.products;
      }
      return this.products.filter(
        (product) =>
          product.type.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    },
  },
  methods: {
    Soon() {
      this.$swal.fire({
        icon: "info",
        title: "Soon.....",
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