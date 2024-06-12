<template>
  <div class="pt-5">
    <h1>components</h1>
    <h1>{{id}}</h1>
    <v-btn color="success" @click="callMain()">yahh</v-btn>
  </div>
</template>

<script>
import {EventBus } from '@/EventBus'

export default {
    props:['id'],
    methods:{
      callMain(){
        // this.$$emit('callAlertParam', this.id)
        EventBus.$emit('callAlertZ')
      }
    }
}
</script>

<style>

</style>