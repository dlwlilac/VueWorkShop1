<template>
  <v-item-group mandatory class="mt-n1">
    <v-container>
      <v-row justify="center" class="space">
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="2"
          v-for="(category, i) in categories"
          :key="i"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#D5E4F0' : 'white'"
              :class="active ? 'borderme' : 'borderout'"
              class="d-flex align-center rounded-lg mx-2"
              dark
              height="180"
              @click="selectCategory(category.title, toggle)"
              flat
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          :src="category.img"
                          max-height="120"
                          max-width="120"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'blue--text' : 'black--text'"
                        class="mt-4"
                        ><strong>{{
                          category.title
                        }}</strong></v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data: () => ({
    categories: [
      { img: "img/Figure.png", title: "Figure" },
      { img: "img/Statues.png", title: "Statues" },
      { img: "img/Plush.png", title: "Plush" },
      { img: "img/Pin.png", title: "Pin" },
      
    ],
  }),
  methods: {
      selectCategory(title, toggle) {
      console.log('Category selected:', title);
      this.$emit('category-selected', title);
      toggle();
    }
    },
};
</script>

<style>
</style>