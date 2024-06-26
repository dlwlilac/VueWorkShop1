<template>
  <v-app>
    <Navbar />
    <v-container fluid class="backgroundImage main-container">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img
              class="image"
              src="img/BG.png"
              max-height="720px"
              max-width="100%"
            >
              <!-- <v-card-title class="top ml-10">
                <strong class="TitleShop">ไก่ชนนาทาน </strong>
              </v-card-title>
              <v-card-title class="ml-10 mt-n8">
                <h2 class="TitleShop2">Store</h2>
              </v-card-title> -->
              <!-- <v-card-text class="ml-10">
                <h3 class="green--text">#เทส</h3>
              </v-card-text> -->
              <!--  -->
            </v-img>
          </v-card>
          <v-toolbar flat color="transparent">
            <v-toolbar-title><h3>หมวดหมู่</h3></v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn-toggle v-model="toggle_exclusive" group color="#1007C2">
              <v-btn class="rounded-circle" width="50" height="50">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn class="rounded-circle" width="50" height="50">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle> -->
          </v-toolbar>

          <Category @category-selected="handleCategorySelected" />

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
          <Product
            :selectedCategory="selectedCategory"
            :key="selectedCategory"
          />

          <!-- <v-card flat color="#1007C2" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
    <div class="fab-container">
      <v-badge color="#41AB55" overlap content="9+" class="mr-2 mt-1">
        <v-btn small fab dark color="#ECF7EE" @click="Soon()">
          <v-icon small class="btnNavbar" color="#41AB55">mdi-cart</v-icon>
        </v-btn>
      </v-badge>
      <v-badge color="#FF6D59" overlap content="9+" class="mr-2 mt-1">
        <v-btn small fab dark color="#FFF0EE" @click="Soon()">
          <v-icon small class="btnNavbar" color="#FF6D59">mdi-heart</v-icon>
        </v-btn>
      </v-badge>
      <v-btn small fab dark color="primary" @click="scrollToTop">
        <v-icon small class="btnNavbar">mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script >
import Navbar from "../layouts/Navbar";
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
// import { IconHome } from '@tabler/icons-vue';

export default {
  name: "Home",
  data() {
    return {
      selectedCategory: "Figure",
      // showScrollToTop: false
    };
  },
  components: {
    Navbar,
    Category,
    Product,
    // IconHome,
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
    handleCategorySelected(title) {
      console.log("Parent received category:", title); // เพิ่ม log นี้
      this.selectedCategory = title;
    },
    scrollToTop() {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
.fab-container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.v-btn {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}

.rounded-circle {
  border-radius: 50%;
}
.main-container {
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.mt-auto {
  margin-top: auto;
}

.v-card.borderme {
  border: 2px solid rgb(38, 0, 128) !important;
}

.v-card.borderout {
  border: 1px solid #d8d5f0 !important;
}

.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}

.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}

.top {
  margin-top: 20px;
}

.TitleShop {
  font-size: 60px;
  color: white;
  margin-top: 40px;
}

.TitleShop2 {
  font-size: 30px;
  color: white;
  margin-top: 20px;
}

/* Responsive styles */
@media only screen and (min-width: 600px) {
  .TitleShop {
    font-size: 60px;
    color: white;
    margin-top: 40px;
  }

  .TitleShop2 {
    font-size: 30px;
    color: white;
    margin-top: 20px;
  }

  .top {
    margin-top: 50px;
  }
}

@media only screen and (min-width: 600px) {
  .TitleShop {
    font-size: 80px;
    color: white;
    margin-top: 80px;
  }

  .TitleShop2 {
    font-size: 36px;
    color: white;
    margin-top: 30px;
  }

  .top {
    margin-top: 80px;
  }
}

@media only screen and (min-width: 768px) {
  .TitleShop {
    font-size: 100px;
    color: white;
    margin-top: 120px;
  }

  .TitleShop2 {
    font-size: 40px;
    color: white;
    margin-top: 40px;
  }

  .top {
    margin-top: 120px;
  }
}
</style>