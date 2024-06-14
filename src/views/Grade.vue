<template>
  <div class="container-xxl backgroundGrade">
    <div class="d-flex justify-md-center grade-card">
      <v-card width="500">
        <v-card-title> WorkShop คำนวณเกรด </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="calGrade">
            <v-text-field
              v-model="grade"
              label="กรอกคะแนนของคุณ"
            ></v-text-field>
            <v-btn color="success" @click="calGrade()">คำนวณ</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    calGrade() {
      if (isNaN(this.grade) || this.grade === "") {
        this.result = "กรุณากรอกตัวเลขเท่านั้น";
        this.$swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "กรุณากรอกตัวเลขเท่านั้น",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
          },
        });
      } else if (this.grade > 100 || this.grade < 0) {
        this.result = "กรุณากรอกคะแนนระหว่าง 0-100";
        this.$swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "กรุณากรอกคะแนนระหว่าง 0-100",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
          },
        });
      } else {
        this.grade >= 80
          ? (this.result = " คุณได้เกรด A")
          : this.grade >= 70
          ? (this.result = " คุณได้เกรด B")
          : this.grade >= 60
          ? (this.result = " คุณได้เกรด C")
          : this.grade >= 50
          ? (this.result = " คุณได้เกรด D")
          : (this.result = " คุณได้เกรด F");
        this.$swal.fire({
          icon: "success",
          title: "ผลการคำนวณเกรด",
          text: "คะแนน "+ this.grade + this.result,
        });
      }
    },
  },
};
</script>

<style>
.grade-card {
  padding: 20px 20px 20px 20px;
}

.product-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: calc(33.333% - 40px);
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
}

.backgroundGrade {
  display: flex;
  justify-content: top;
  align-items: center;
  min-height: 100vh;
  background-image: url("../assets/img-headerbg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  flex-direction: column;
}
</style>