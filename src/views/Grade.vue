<template>
  <div class="container-xxl">
    <div class="d-flex justify-md-center grade-card">
      <v-card width="500">
        <v-card-title class="text-gradient"> WorkShop คำนวณเกรด </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="calGrade">
            <v-text-field v-model="grade" label="Your Score"></v-text-field>
            <v-btn color="success" @click="calGrade()">คำนวณ</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  methods: {
    calGrade() {
      if (isNaN(this.grade) || this.grade === "") {
        this.result = "กรุณากรอกตัวเลขเท่านั้น";
        Swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "กรุณากรอกตัวเลขเท่านั้น",
        });
      } else if (this.grade > 100 || this.grade < 0) {
        this.result = "กรุณากรอกคะแนนระหว่าง 0-100";
        Swal.fire({
          icon: "error",
          title: "ผิดพลาด",
          text: "กรุณากรอกคะแนนระหว่าง 0-100",
        });
      } else {
        this.grade >= 80
          ? (this.result = "คุณได้เกรด A")
          : this.grade >= 70
          ? (this.result = "คุณได้เกรด B")
          : this.grade >= 60
          ? (this.result = "คุณได้เกรด C")
          : this.grade >= 50
          ? (this.result = "คุณได้เกรด D")
          : (this.result = "คุณได้เกรด F");
        Swal.fire({
          icon: "success",
          title: "ผลการคำนวณเกรด",
          text: this.result,
        });
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: 'Mali', sans-serif;
}

.grade-card {
  padding: 20px 20px 20px 20px;
}
</style>