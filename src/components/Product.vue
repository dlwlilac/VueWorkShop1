<template>
  <!-- <v-row justify="center" class="space px-16">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="3"
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
  </v-row> -->
  <v-row class="space mt-5 px-16">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      v-for="(product, i) in filteredProducts"
      :key="i"
    >
      <v-card
        align="center"
        class="Card mx-auto rounded-xl"
        max-width="374"
        color="#fffff"
      >
        <v-img max-height="300" max-width="300" :src="product.img"></v-img>
        <v-toolbar color="transparent" class="mt-n7" flat>
          <v-avatar color="transparent" rounded class="mr-2">
            <v-img
              max-width="150"
              src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=300"
              contain
            ></v-img>
          </v-avatar>
          <v-spacer></v-spacer>
          <v-avatar
            max-height="300"
            max-width="300"
            color="red"
            class="mr-2"
            dark
          >
            <div>
              <div>
                <span class="white--text">Sale</span>
              </div>
            </div>
          </v-avatar>
        </v-toolbar>
        <v-card-title align="start" class="textDetails grey--text small-text">{{
          product.Detail | truncate(40, " ...")
        }}</v-card-title>
        <!-- <v-card-title class="grey--text text-grey-darken-1 mt-n6">555</v-card-title> -->
        <v-card-text align="start" class="textDetails text-black-darken-1 mt-n2"
          ><strong>คงเหลือ : {{ product.stock }}</strong>
        </v-card-text>

        <v-card-text class="mt-n4">
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip label color="blue" dark>{{ product.price }}</v-chip>

            <v-spacer></v-spacer>
            <v-avatar
              class="mr-2 mt-1"
              color="#FFF0EE"
              size="40"
              @click="Soon()"
            >
              <v-icon small class="btn" color="#FF6D59">mdi-heart</v-icon>
            </v-avatar>
            <v-avatar
              class="mr-2 mt-1"
              color="#ECF7EE"
              size="40"
              @click="Soon()"
            >
              <v-icon class="btn" color="#41AB55">mdi-cart-arrow-down</v-icon>
            </v-avatar>
          </v-chip-group>
        </v-card-text>
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
        img: "img/sylas.png",
        productName: "Sylas Figure",
        Detail: "Figure is number #13 in Series 4",
        price: "$29.99",
        stock: "10",
        type: "Figure",
        avatar: "img/sylas.png",
      },
      {
        img: "img/Porcelain_Lux.png",
        productName: "Porcelain Lux Figure",
        Detail: "SPECIAL EDITION",
        price: "$34.99",
        stock: "10",
        type: "Figure",
      },
      {
        img: "img/Yone.png",
        productName: "Yone Figure",
        Detail: "Yone Figure is #16 in Series 4",
        price: "$34.99",
        stock: "10",
        type: "Figure",
      },
      {
        img: "img/Space-Groove-Blitz.png",
        productName: "Space Groove Blitzcrank XL Figure",
        Detail: "Space Groove Blitzcrank XL Figure is number #19 in Series 4",
        price: "$40",
        stock: "10",
        type: "Figure",
      },
      {
        img: "img/OrnnXL.png",
        productName: "Ornn Figure XL",
        Detail: "Ornn Figure XL is number #10 in Series 4",
        price: "$35",
        stock: "10",
        type: "Figure",
      },
      {
        img: "img/Kayn.png",
        productName: "Kayn Figure",
        Detail: "Kayn Figure is number #08 in Series 4",
        price: "$30",
        stock: "10",
        type: "Figure",
      },
      {
        img: "img/nunu.png",
        productName: "NUNU & WILLUMP",
        Detail:
          "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a monster - only to discover that the beast, a lonely and magical yeti, merely needed a friend.",
        price: "$129.99",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/Ahri_Faker.png",
        productName: "Ahri HALL OF LEGENDS 2024",
        Detail:
          "FIRST AMONG LEGENDS Lol Esports' Hall of Legends commemorates the best of the best: players who have forever shaped our game, sport, and community.",
        price: "$299.99",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/Statues.png",
        productName: "PUREARTS JINX AND VI",
        Detail:
          "If Vi stands for violence and Jinx stands for Jinx (durr), the PureArts Jinx and Vi 1/6 Scale Statue Bundle stands for value!",
        price: "$549.99",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/Aatrox.png",
        productName: "JIMEI PALACE AATROX 1/6 SCALE",
        Detail:
          "Once a mighty Shuriman champion remade as an Ascended, Aatrox helped halt the onslaught of the Void during the Icathian rebellion. However, in time, with no monarch or existential threat to defend against, Aatrox and the other Sunborn began to clash in a war for the ruins of the world.",
        price: "$489.99",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/Kindred.png",
        productName: "SPIRIT BLOSSOM KINDRED",
        Detail:
          "On the eve of the Spirit Blossom festival, the veil between the mortal world and the Spirit Realm is at its weakest. Cross over and enlist the help of Spirit Blossom Kindred to venture back to the world of the living!",
        price: "$475",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/missfor.png",
        productName: "CAPTAIN FORTUNE",
        Detail:
          "In another life, Sarah Fortune would have been a respected ship captain, supported by the love of her mother and the admiration of her city. But the things Bilgewater takes, you can't always get back...",
        price: "$1079.99",
        stock: "10",
        type: "Statues",
      },
      {
        img: "img/AoShin.png",
        productName: "POWER CHORD AO SHIN",
        Detail:
          "Pick up an Power Chord Ao Shin Plush and bring down the house with this Little Legend!",
        price: "$34.99",
        stock: "10",
        type: "Plush",
      },
      {
        img: "img/renek.png",
        productName: "RENEKTOY",
        Detail:
          "Feeling a little rough around the edges? Let Renektoy take a chomp at it!",
        price: "$34.99",
        stock: "10",
        type: "Plush",
      },
      {
        img: "img/teemo.png",
        productName: "TEEMO",
        Detail: "TEEMO",
        price: "$29.99",
        stock: "10",
        type: "Plush",
      },
      {
        img: "img/spirit.png",
        productName: "SPIRIT BLOSSOM AHRI FOX",
        Detail: "When mortal souls arrive at the spirit realm",
        price: "$32.99",
        stock: "10",
        type: "Plush",
      },
      {
        img: "img/veigar.png",
        productName: "VEIGAR",
        Detail: "Once the little Yordle sorcerer that could",
        price: "$32.99",
        stock: "10",
        type: "Plush",
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

.three {
  width: 50px;
  height: 50px;
}

.four {
  width: 50px;
  height: 25px;
  /* background: black; */
}
.five {
  width: 50px;
  height: 25px;
  background: #042a0f;
}
.six {
  width: 50px;
  height: 25px;
  background: #2c2107;
}
</style>