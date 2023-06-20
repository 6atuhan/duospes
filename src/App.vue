<template>
<div class="flex items-center justify-between flex-col min-h-screen ">
  <!-- <HeaderComp></HeaderComp> -->
  <router-view class="mb-auto">
  </router-view>
  <!-- <FooterComp></FooterComp> -->

</div>
</template>

<script setup>
// import HeaderComp from "/src/components/HeaderComp.vue"
// import FooterComp from "/src/components/FooterComp.vue"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue';
import store from "/src/store";
onMounted(()=>{
  AOS.init()
})
</script>

<style>
.shadowing{

box-shadow:  5px 5px 10px #666666,
             -5px -5px 10px transparent;
}
</style>