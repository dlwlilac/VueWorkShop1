<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="show">{{ name }}</h1>
    <v-btn color="success" @click="show = !show">test</v-btn>
    <v-btn color="success" @click="callAlert()"> Alert</v-btn>

    <v-row justify="center" align="center">
      <v-avatar size="150">
        <v-img width="300" src=""></v-img>
      </v-avatar>
    </v-row>

    <!-- <v-card-actions>
        <v-btn color="success" @click="callAlertParam(item.name)" > Alert</v-btn>
    </v-card-actions> -->

    <v-col cols="12">
      <h1>{{ id }}</h1>
      <v-text-field name="item" label="item" id="item" v-model="item"></v-text-field>
      <!-- <v-btn color="primary" @click="callAlertParam(id)">Alert</v-btn> -->
      <v-btn color="primary" @click="setLocal(item)">SetLocal</v-btn>
    </v-col>

    <v-col cols="12">
      <simcom :id="id" @callAlertParam="callAlertParam" />
    </v-col>
  </div>
</template>

<script>
import simcom from "../components/SimCom.vue";
import { EventBus } from "@/EventBus";

export default {
  components: {
    simcom,
  },
  data() {
    return {
      id: "",
      name: "test",
      show: true,
      imgset: [
        {
          name: "cattttt",
          imglike:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
        },
      ],
    };
  },
  mounted() {
    EventBus.$on("callAlertZ", this.callAlert);
  },
  beforeDestroy() {
    EventBus.$off("callAlertZ", this.callAlert);
  },
  methods: {
    callAlert() {
      this.$swal.fire({
        title: "HELLO!",
        text: "test",
        icon: "question",
      });
    },
    callAlertParam(item) {
      // alert(item);
      this.$swal.fire({
        title: item,
        text: item,
        icon: "info",
      });
    },
    setLocal(item) {
      localStorage.setItem("user", item);
       this.$swal.fire({
        title: "Set user complete",
        icon: "success",
      });
    },
  },
};
</script>

<style>

</style>