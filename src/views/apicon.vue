<template>
  <div class="backgroundImage1">
    <div justify="center" align="center" class="container">
      <h1 class="title-text">จัดการสินค้า</h1>
      <div class="d-flex ml-10">
        <v-btn class="btnNavbar" style="margin-left: 8px; margin-right: 8px" color="primary" @click="reloadPage">กลับหน้าแรก</v-btn>
      </div>
      <div class="d-flex justify-end mr-10">
        <v-btn class="btn" @click="toggleView">{{
          tableView ? "Table" : "Card"
        }}</v-btn>
        <!-- <v-btn class="btn info ml-3" @click="toggleShowFullText">
          {{ showFullText ? "ยกเลิก" : "All Detail" }}
        </v-btn> -->
        <v-btn class="btn ml-3 success" @click="newProduct()"
          >เพิ่มสินค้า</v-btn
        >
      </div>
      <h4></h4>
      <br />
      <!-- -->

      <!-- ถ้า tableView เป็น true แสดงแบบ Table -->
      <template v-if="tableView">
        <v-data-table :headers="tableHeaders" :items="apiData">
          <template v-slot:items="props">
            <td>{{ props.item.productName }}</td>
            <td>{{ props.item.detail }}</td>
            <td>{{ props.item.type }}</td>
            <td>{{ props.item.price }}</td>
            <td>{{ props.item.stock }}</td>
            <!-- ปุ่มไม่ยอมแสดงเศร้าเลย -->
            <td> 
              <v-icon class="me-2" size="small" @click="editItem(props.item)">
                mdi-pencil
              </v-icon>
              <v-icon size="small" @click="deleteItem(props.item)">
                mdi-delete
              </v-icon>
            </td>
          </template>
        </v-data-table>
      </template>

      <!-- ถ้า tableView เป็น false แสดงแบบ Card -->
      <template v-else>
        <v-row justify="center" align="center">
          <div v-for="(item, index) in apiData" :key="index">
            <v-col cols="12">
              <v-card width="600" class="product-card">
                <v-row align="center" justify="center">
                  <v-col cols="4" class="d-flex align-center justify-center">
                    <v-img width="300" :src="item.urlImg"></v-img>
                  </v-col>
                  <v-col cols="8" class="d-flex flex-column">
                    <v-card-title align="left" primary-title>
                      {{ item.productName }}
                      <v-card-subtitle>
                        <b>รายละเอียด: </b>
                        <!-- <span v-if="showFullText">{{ item.detail }}</span>
                        <span v-else>{{
                          item.detail | truncate(50, "...")
                        }}</span> -->
                        <span> {{item.detail | truncate(50, "...")}} </span>
                        <br />
                        <b>ประเภท:</b> {{ item.type }} <br />
                        <b>ราคา:</b> {{ item.price }} $ <br />
                        <b>คงเหลือ:</b> {{ item.stock }}
                      </v-card-subtitle>
                    </v-card-title>
                    <v-card-actions class="d-flex justify-end">
                      <v-spacer></v-spacer>
                      <v-btn class="btn info" @click="EditProduct(item)"
                        >แก้ไข</v-btn
                      >
                      <v-btn class="btn error" @click="deleteProducts(item)">
                        <v-icon right>mdi-delete</v-icon>ลบสินค้า
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </div>
        </v-row>
      </template>
      <!--  -->
      <br /><br />
      <v-dialog v-model="dialogEdit" max-width="750">
        <v-card>
          <v-card-title primary-title>{{ savemode }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  name="productName"
                  label="ชื่อสินค้า"
                  id="productName"
                  outlined
                  v-model="postdata.productName"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select
                  name="type"
                  label="ประเภท"
                  id="type"
                  outlined
                  v-model="postdata.type"
                  :items="typeOptions"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="detail"
                  label="รายละเอียด"
                  id="detail"
                  outlined
                  rows="2"
                  v-model="postdata.detail"
                ></v-textarea>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="price"
                  label="ราคา"
                  id="price"
                  outlined
                  v-model="postdata.price"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  name="stock"
                  label="คงเหลือ"
                  id="stock"
                  outlined
                  v-model="postdata.stock"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="urlImg"
                  label="urlImg"
                  id="urlImg"
                  outlined
                  rows="2"
                  v-model="postdata.urlImg"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" class="btn" @click="closeAddProduct()"
              >ยกเลิก</v-btn
            >
            <v-btn
              color="primary"
              class="btn"
              @click="saveDataProducts(postdata)"
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <template>
      <div justify="center" align="center" class="footer">
        <!-- ยังไม่ทำ -->
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogEdit: false,
      apiData: [],
      id: "",
      // showFullText: false,
      tableView: false,
      tableHeaders: [
        { text: "ชื่อสินค้า", value: "productName" },
        { text: "รายละเอียด", value: "detail" },
        { text: "ประเภท", value: "type" },
        { text: "ราคา", value: "price" },
        { text: "คงเหลือ", value: "stock" },
        { text: "จัดการ", value: "actions", sortable: false },
      ],

      postdata: {
        productName: "",
        type: "",
        price: "",
        stock: "",
        detail: "",
        urlImg: "",
      },
      typeOptions: ["Special Edition", "LIMITED EDITION", "Figure in Series 4"],
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
    DetailProduct() {
      const maxLength = 50;
      const detail = this.item.detail;
      if (detail.length <= maxLength) {
        return detail;
      }
      return detail.slice(0, maxLength) + "...";
    },
  },
  created() {
    this.getData();
  },
  methods: {
    reloadPage() {
      this.$router.push('/').then(() => {
        window.location.reload();
      });
    },
    toggleView() {
      this.tableView = !this.tableView; // เมื่อกดปุ่ม เปลี่ยนค่า tableView ระหว่าง true กับ false
    },
    // toggleShowFullText() {
    //   this.showFullText = !this.showFullText;
    // },
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
        })
        .catch(() => {
          // console.error("Error fetching data:", error);
          this.$swal.fire({
            icon: "error",
            title: "Server Error",
            text: "ไม่สามารถเข้าถึงข้อมูลได้",
          });
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
.container {
  max-width: 1500px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
}

.title-text {
  padding: 20px 20px 20px 20px;
}
.product-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: calc(33.333% - 40px);
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
  border-radius: 20px;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.btn {
  background-color: #1d04ec;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>