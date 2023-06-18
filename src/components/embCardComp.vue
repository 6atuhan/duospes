<template>

    <div class=" card  mt-40 saturate-100 h-96  w-96 flex flex-col p-4 items-center justify-start pt-40 relative bg-red-200 transition-all rounded-lg">
       <!-- foto alanı -->
        <div class="neu-container w-72 p-2 rounded-lg absolute -top-32 bg-white drop-shadow-xl shadow-black">
        <img :src="props.img" alt="model" class="border-2 border-dashed border-black p-4 saturate-100 hover:saturate-[1.100] transition-all" >
        </div>
        <!-- model numarası -->
        <div class="absolute -top-3 -left-3 p-1 bg-white rounded-full neu-container">
        <p class="font-bold select-none bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-black border-dashed text-sm">#{{ props.index +1 }}</p>

        </div>
        <!-- seri yazısı -->
        <h1 class="font-semibold tracking-widest self-start ">Seri: 
            <strong class="text-blue-600 hover:text-blue-ds font-TT-Alientz-Serif select-none cursor-pointer border-b  hover:text-shadow-thin hover:border-black transition-all border-blue-600">Superman</strong> 
            & 
            <strong class="text-blue-600 hover:text-blue-ds font-TT-Alientz-Serif select-none cursor-pointer border-b hover:text-shadow-thin hover:border-black transition-all border-blue-600">DC</strong>
        </h1>
        <!-- boyut yazısı -->
        <p class="font-semibold tracking-widest self-end border-b border-black"> <span>14</span>cm x <span>12</span>cm</p>

        <div class="h-96  w-96 overflow-hidden -z-10  absolute top-0 left-0 rounded-lg rotate-180">
            <div class="card__wave absolute -z-10 w-full h-full top-16 " ></div>
        </div>
    </div>

</template>

<script setup>
import { onMounted } from "vue"
import foto1 from "/src/assets/tasarımlar/1.png"
const props = defineProps({
    index:String,
    img : Image
})

</script>

<style scoped  >
.neu-container{
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  5px 5px 10px #666666,
             -5px -5px 10px transparent;
}

 .card__wave {

     position: absolute;
     z-index: 1;
     bottom: 28%;
     left: 50%;
     margin-left: -400px;
     width: 800px;
     height: 800px;
     border-radius: 40%;
     box-shadow: inset 0px 0px 8px 2px #9ab6d6;
     background-color: white;
     animation: card-wave-move infinite linear forwards;
     animation-delay: 0s;
     animation-duration:  30s ;
}


 @keyframes card-wave-move {
	 from {
		 transform: rotate(0deg);
	}
	 to {
		 transform: rotate(360deg);
	}
}

</style>