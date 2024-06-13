<template>
  <v-container fluid>
    <div justify="center" align="center">
      <h1 class="title-text">รายการสินค้าทั้งหมด</h1>
      <h4></h4>
      <br />
      <v-row justify="center" align="center">
        <div v-for="(item, index) in apiData" :key="index">
          <v-col cols="12">
            <v-card width="350">
              <v-img width="350" :src="item.urlImg"></v-img>
              <v-card-title align="left" primary-title>
                {{ item.productName }}
                <v-card-subtitle>
                  <b>รายละเอียด:</b> {{ item.detail }} <br />
                  <b>ราคา:</b> {{ item.price }} <br />
                  <b>คงเหลือ:</b> {{ item.stock }}
                </v-card-subtitle>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" @click="editItem(item)">edit</v-btn>
                <v-btn color="red" @click="saveDelete(item._id)"
                  ><v-icon right>mdi-delete</v-icon>delete</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
      <br /><br />
      <!-- <v-btn color="success" @click="getData()">ApiCall</v-btn> -->
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      apiData: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get("http://localhost:3000/products/AllProducts")
        .then((res) => {
          console.log(res.data);
          this.apiData = res.data.data;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.title-text {
  padding: 20px 20px 20px 20px;
}
</style>