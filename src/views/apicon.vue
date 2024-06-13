<template>
  <v-container fluid>
    <div justify="center" align="center">
      <h1 class="title-text">รายการสินค้าทั้งหมด</h1>
      <div class="d-flex justify-end mr-10">
        <v-btn color="success" @click="newProduct()">เพิ่มสินค้า</v-btn>
      </div>
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
                <v-btn color="info" @click="EditProduct(item)">edit</v-btn>
                <v-btn color="red" @click="deleteProducts(item)"
                  ><v-icon right>mdi-delete</v-icon>delete</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </div>
      </v-row>
      <br /><br />
      <v-dialog v-model="dialogEdit" max-width="500px">
        <v-card>
          <v-card-title primary-title>{{ savemode }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  name="productName"
                  label="ชื่อสินค้า"
                  id="productName"
                  v-model="postdata.productName"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="detail"
                  label="รายละเอียด"
                  id="detail"
                  v-model="postdata.detail"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="type"
                  label="ประเภท"
                  id="type"
                  v-model="postdata.type"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="price"
                  label="ราคา"
                  id="price"
                  v-model="postdata.price"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="stock"
                  label="คงเหลือ"
                  id="stock"
                  v-model="postdata.stock"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="urlImg"
                  label="urlImg"
                  id="urlImg"
                  v-model="postdata.urlImg"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="closeAddProduct()">Cancel</v-btn>
            <v-btn color="primary" @click="saveDataProducts(postdata)"
              >save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialogEdit: false,
      apiData: [],
      id: "",
      postdata: {
        productName: "",
        type: "",
        price: "",
        stock: "",
        detail: "",
        urlImg: "",
      },
      postdefault: {
        // ล้างข้อมูล
        productName: "",
        type: "",
        price: "",
        stock: "",
        detail: "",
        urlImg: "",
      },
    };
  },
  computed: {
    savemode() {
      return this.id == "" ? "เพิ่มสินค้า" : "แก้ไขสินค้า";
    },
  },
  created() {
    this.getData();
  },
  methods: {
    newProduct() {
      this.id = "";
      this.postdata = { ...this.postdefault };
      this.dialogEdit = true;
    },
    EditProduct(item) {
      this.id = item._id;
      this.postdata = { ...item };
      this.dialogEdit = true;
    },
    closeAddProduct() {
      this.id = "";
      this.postdata = { ...this.postdefault };
      this.dialogEdit = false;
    },
    saveDataProducts(postdata) {
      if (this.id != "") {
        this.editProduct();
      } else this.addProduct(postdata);
      // this.dialogedit = false;
    },
    getData() {
      this.axios
        .get("http://localhost:3000/products/AllProducts")
        .then((res) => {
          console.log(res.data);
          this.apiData = res.data.data;
        });
    },
    async addProduct() {
      try {
        const { data } = await this.axios.post(
          "http://localhost:3000/products/AddProducts",
          this.postdata
        );
        console.log(data);
        this.getData();
        this.closeAddProduct();
        this.$swal.fire({
          icon: "success",
          title: "เพิ่มสินค้าเรียบร้อยแล้ว",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      } catch (error) {
        console.log(error);
        this.$swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "ไม่สามารถเพิ่มสินค้าได้",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
    },
    async deleteProducts(item) {
      this.postdata = { ...item };
      console.log(this.postdata._id);
      try {
        const response = await this.axios.delete(
          `http://localhost:3000/products/DeleteProducts/${this.postdata._id}`
        );
        console.log("Item deleted successfully:", response.data);
        this.getData();
        this.$swal.fire({
          icon: "success",
          title: "ลบสินค้าเรียบร้อยแล้ว",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          text: "ไม่สามารถลบสินค้าได้",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    },
    async editProduct() {
      try {
        const response = await this.axios.put(
          `http://localhost:3000/products/EditProducts/${this.postdata._id}`,
          this.postdata
        );
        console.log("Item edited successfully:", response.data);
        this.getData();
        this.closeAddProduct();
        this.$swal.fire({
          icon: "success",
          title: "แก้ไขสินค้าเรียบร้อยแล้ว",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      } catch (error) {
        this.getData();
        this.closeAddProduct();
        this.$swal.fire({
          icon: "error",
          text: "ไม่สามารถแก้ไขสินค้าได้",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
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