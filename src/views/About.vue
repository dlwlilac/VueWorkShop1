<template>
  <div>
    <div class="container">
      <HeadProfile class="profile-title" />
    </div>
    <div class="container">
      <StoryBar class="story-components"/>
    </div>
    <div class="container">
      <Contents class="content-components"/>
    </div>
  </div>
</template>

<script>
import HeadProfile from '../components/HeadProfile.vue'
import StoryBar from '../components/StoryBar.vue'
import Contents from '../components/Content.vue'

export default {
  components: {
    // cover , 
    HeadProfile,
    StoryBar,
    Contents
  }
  // return 
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.profile-title {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100vh;
}

.content-components{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100vh;
}

.story-components {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100vh;
}

</style>