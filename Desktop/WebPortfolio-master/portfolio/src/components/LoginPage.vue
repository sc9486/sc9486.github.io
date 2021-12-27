<template>
  <div>
  <hooper>
    <slide>
      <img src="../assets/img06.png" class="test7">

    </slide>
    <slide>

      <router-link to="/"><img src="../assets/Left.jpg" class="Left"></router-link>



    </slide>
    <slide>
      <img src="../assets/Right.jpg" class="Right">
    </slide>
    
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  <hooper>
      <slide>
      <img src="../assets/img06.png" class="test7">

    </slide>

  </hooper>

  <router-view />
  </div>

</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  methods:{
  
  }
}


</script>