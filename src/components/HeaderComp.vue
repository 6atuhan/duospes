<template>
    <div>
        <div class=" text-3xl text-center  h-10  font-bold font-TT-Alientz-Serif drop-shadow-md tracking-widest">
            <h1 class=" w-fit h-10 mx-auto ">duospes</h1>
        </div>
        <div>
        <ul class="flex justify-center items-center gap-2 my-4 font-TT-Alientz-Var flex-wrap ">
            <div id="menubtn" class="menu-button menu-button-3 menu-hover-border-5 text-center" v-for="i in 5" :key="i">
                {{ 'menu '+i }}
            </div>

        </ul>
        </div>
    </div>
</template>

<script setup>



import store from "/src/store"
</script>

<style scoped>

:active, :hover, :focus {
  outline: 0!important;
  outline-offset: 0;
}
::before,
::after {
  position: absolute;
  content: "";
}

.menu-button {
  position: relative;
  display: inline-block;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  min-width: 100px;
}



/*--- menu-button-3 ---*/


.menu-button-3::before,
.menu-button-3::after {
  background: transparent;
  z-index: 2;
}


/* 15. menu-hover-border-5 */
  .menu-hover-border-5::before,
  .menu-hover-border-5::after {
  width: 0%; height: 0%;
  opacity: 0;
}
  .menu-hover-border-5::before {
  top: 0; right: 0;
  border-top: 2px dashed black;
  border-left: 2px dashed black;
  transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear, opacity 0s 0.7s;
}
  .menu-hover-border-5::after {
  bottom: 0; left: 0px;
  border-bottom: 2px dashed black;
  border-right: 2px dashed black;
  transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
}
  .menu-hover-border-5:hover::before,
  .menu-hover-border-5:hover::after {
  width: 100%; height: 96%;
  opacity: 1;
}
  .menu-hover-border-5:hover::before {
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s;   /* 1,2 */
}
  .menu-hover-border-5:hover::after {
  transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out, opacity 0s 0.3s; 
} 
</style>