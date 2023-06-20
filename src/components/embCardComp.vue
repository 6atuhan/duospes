<template>

    <div class=" card  mt-40 saturate-100 h-96  w-96 flex flex-col p-4 items-center justify-start pt-36 relative bg-red-200 transition-all rounded-lg">
       <!-- foto alanı -->
        <div @click="flipping($event)" class="shadowing  w-64 h-64 p-2 rounded-lg absolute -top-32 bg-white drop-shadow-xl shadow-black">
            <div class="w-full h-full border-2 border-dashed border-black group">
                <img v-if="flip==false" :src="props.img" alt="model" class="w-full h-full object-contain group-hover:hue-rotate-[360deg] hue-rotate-0 duration-1000  p-4 saturate-100 hover:saturate-[1.100] transition-all" >
                <img v-if="flip==true" src="/src/assets/duospeslogo.png" alt="model" class=" w-full h-full object-contain  hue-rotate-0 duration-1000 p-4 saturate-100 hover:saturate-[1.100] transition-all" >
            </div>
        </div>
        <!-- model numarası -->
        <div class="absolute -top-3 -left-3 p-1 bg-white rounded-full shadowing">
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
        <!-- not yazısı -->
        <div class="w-full p-2 text-sm relative">
            <p>Bu ürün <strong class="font-bold underline underline-offset-4 text-shadow-thin text-blue-400">göğüs</strong> bölgesi için öneriliyor.</p>
            <p>Dilerseniz istediğiniz bölgeye <strong class="text-shadow-thin underline underline-offset-4  text-pink-300">özelleştirebilirsiniz.</strong></p>
            <!-- bölge yardımı -->
            <div @click="modalNameSelect('AreaModalComp')"  class="absolute top-2 -left-10 p-1 bg-white rounded-full shadowing cursor-pointer opacity-50 hover:opacity-100 transition-all">
            <p class="font-bold select-none bg-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 border-dashed text-sm">?</p>
            </div>
        </div>
        <!-- beden -->
        <div class="w-full relative items-center my-2 justify-end flex flex-row flex-wrap font-bold font-TT-Alientz-Var">
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-cyan-300  hover:text-cyan-900 bg-cyan-900 text-cyan-300 border border-cyan-700 scale-100 hover:scale-105 transition-all duration-75 lowercase w-10 text-center hover:!shadow-lime-500 hover:!shadow-md ">S</div>
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-cyan-300  hover:text-cyan-900 bg-cyan-900 text-cyan-300 border border-cyan-700 scale-100 hover:scale-105 transition-all duration-75 lowercase w-10 text-center hover:!shadow-lime-500 hover:!shadow-md ">M</div>
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-cyan-300  hover:text-cyan-900 bg-cyan-900 text-cyan-300 border border-cyan-700 scale-100 hover:scale-105 transition-all duration-75 lowercase w-10 text-center hover:!shadow-lime-500 hover:!shadow-md ">L</div>
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-cyan-300  hover:text-cyan-900 bg-cyan-900 text-cyan-300 border border-cyan-700 scale-100 hover:scale-105 transition-all duration-75 lowercase w-10 text-center hover:!shadow-lime-500 hover:!shadow-md ">XL</div>
            <!-- beden yardımı -->
            <div @click="modalNameSelect('SizeModalComp')" class="absolute top-2 -right-8 p-1 bg-white rounded-full shadowing cursor-pointer opacity-50 hover:opacity-100 transition-all">
            <p class="font-bold select-none bg-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-cyan-500 text-cyan-500 border-dashed text-sm">?</p>
            </div>
        </div>
        <!-- buttonlar -->
        <div class="w-full items-center justify-between flex flex-row flex-wrap font-bold font-TT-Alientz-Var">
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-pink-300 hover:text-pink-900 bg-pink-900 text-pink-300 border border-pink-700 scale-100 hover:scale-105 transition-all duration-75">Düzenle</div>
            <div class="cursor-pointer shadowing m-2 px-2 py-1 rounded-xl hover:bg-green-300 hover:text-green-900 bg-green-900 text-green-300 border border-green-700 scale-100 hover:scale-105 transition-all duration-75">Sepete ekle</div>
        </div>

    </div>

</template>

<script setup>
import { ref } from "vue";
import store from "/src/store"

const props = defineProps({
    index:Number,
    img : String
})

const flip = ref(false)

const flipping = (e) =>{
    const flipclass="flip-horizontal-bottom"
    e.target.classList.toggle(flipclass)
    setTimeout(() => {
        flip.value = !flip.value
    }, 200);
}

const modalNameSelect=(mName)=>{
    store.state.modalName=mName
}

</script>

<style scoped  >


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


.flip-horizontal-bottom {
	-webkit-animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        }

@-webkit-keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
            
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
            
            


  }
}
@keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
            
            
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
            
            

  }
}

</style>