<template>
    <button class="btn btn-3 hover-border-5 ">
        <span :class="{'text-gray-700':store.state.selector, 'text-gray-200': !store.state.selector}" class="px-2 py-1">{{ içerik }}</span>
    </button>
</template>
<script setup>
import { onUpdated } from "vue"
import store from "/src/store"

const props = defineProps({
    içerik:String
})

onUpdated(()=>{
  if(store.state.selector){

    document.documentElement.style.setProperty('--color', 'rgb(0, 255, 255)');
  }
  else{

    document.documentElement.style.setProperty('--color', 'rgb(	185, 0, 130)');
  }
})
</script>



<style >
:root{
  --color :rgb(	185, 0, 130);
}
:active, :hover, :focus {
  outline: 0!important;
  outline-offset: 0;
}
.btn::before,
.btn::after,
span::before,
span::after,
button::before,
button::after,
.btn-3::before,
.btn-3::after,
.hover-border-5::before,
.hover-border-5::after {
  position: absolute;
  content: "";
}

.btn {
  position: relative;
  display: inline-block;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  min-width: 150px;
}
  .btn span {         
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;

    top: 0; left: 0;
    width: 100%;

    transition: 0.3s;
  }


/*--- btn-3 ---*/
.btn-3 {
  padding: 5px;
}
.btn-3 span {

  background-color: var(--color);
}
.btn-3::before,
.btn-3::after {
  background: transparent;
  z-index: 2;
}


/* 15. hover-border-5 */
.btn.hover-border-5::before,
.btn.hover-border-5::after {
  width: 0%; height: 0%;
  opacity: 0;
}
.btn.hover-border-5::before {
  top: 0; right: 0;
  border-top: 2px dashed var(--color);
  border-left: 2px dashed var(--color);
  transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear, opacity 0s 0.7s;
}
.btn.hover-border-5::after {
  bottom: 0; left: 0px;
  border-bottom: 2px dashed var(--color);
  border-right: 2px dashed var(--color);
  transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-5:hover::before,
.btn.hover-border-5:hover::after {
  width: 100%; height: 96%;
  opacity: 1;
}
.btn.hover-border-5:hover::before {
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s;   /* 1,2 */
}
.btn.hover-border-5:hover::after {
  transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out, opacity 0s 0.3s; 
} 
</style>