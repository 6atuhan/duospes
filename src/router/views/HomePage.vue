<template>
	<div class="flex items-center py-10 flex-wrap justify-center font-TT-Alientz-Serif gap-10 flex-col text-3xl ">
		<div class="!w-60 !h-60 aspect-square  shadow-lg shadow-white/20 transition-all  btn btn-3 hover-border-5 flex items-center justify-center m-4 p-4 flex-col !bg-red-700">
			<div class=" !w-64 !h-64 -translate-x-3 -translate-y-3 bg-red-700 p-4">
				<img :src="logo" alt="logo" class="w-32 mx-auto">
				<h1 class=" text-center text-white">duospes</h1>
			</div>
		</div>
		<div class="!w-60 btn btn-3 hover-border-5 !h-60 aspect-square relative flex items-center  shadow-lg shadow-white/20  justify-center  flex-col bg-red-700 ">
			<embroideryAnimComp class="-translate-x-3 -translate-y-3"></embroideryAnimComp>
			<p class="w-full text-center text-white z-[999] absolute bottom-4 left-0 font-TT-Alientz-Var tracking-widest text-4xl">yakında</p>

		</div>
	</div>
</template>

<script setup>
import logo from "/src/assets/duospeslogo.png"
import embroideryAnimComp from "/src/components/embroideryAnimComp.vue"
</script>



<style scoped >
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

  background-color: rgb(255, 255, 255);
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
  border-top: 2px dashed rgb(255, 255, 255);
  border-left: 2px dashed rgb(255, 255, 255);
  transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear, opacity 0s 0.7s;
}
.btn.hover-border-5::after {
  bottom: 0; left: 0px;
  border-bottom: 2px dashed rgb(255, 255, 255);
  border-right: 2px dashed rgb(255, 255, 255);
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