<template>
    <div  class="font-TT-Alientz-Var overflow-hidden h-screen w-screen fixed top-0 left-0 bg-black/40 z-50 flex items-center justify-center ">
        <div  class="bg-white rounded-lg w-[400px]  relative z-[60] flex items-start justify-center p-2 flex-wrap">
            <div @click="store.state.modalName=''" class="group p-1 shadowing absolute -top-2 -right-2 rounded-full bg-red-500 hover:bg-red-700 text-white w-10 h-10 text-center cursor-pointer flex items-center justify-center">
                <svg class="fill-white group-hover:animate-spin p-1 w-full h-full border-2 border-dashed border-white rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="20" height="20">
<g>
	<path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
</g>
                </svg>
            </div>
            <h3 class="text-xs p-2 mr-2">Bölgeler birebir alan değil, yaklaşık pozisyonlardır. Nakış büyüklüğüne göre konumlandırma değişiklik gösterebilir.</h3>
            <div class="basis-full flex items-center justify-center h-64 my-4">
                <img v-if="selector==1" src="/src/assets/t-shirt.png" alt="area-tshirt" class="mx-auto h-full" loading="lazy">
                <img v-if="selector==2" src="/src/assets/sweatshirt.png" alt="area-sweat" class="mx-auto h-full" loading="lazy">
                <img v-if="selector==3" src="/src/assets/hoodie-back.png" alt="area-hoodie" class="mx-auto h-full" loading="lazy">
            </div>
            <ul class=" h-64 cursor-pointer basis-1/3 flex flex-col" :class="{'opacity-40' : selector !=1, 'opacity-100':selector==1}" @click="selector=1" @mouseover="selector=1" >
                <h3 class="font-extrabold text-xl">Tshirt</h3>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-orange-500">1</div>kolye</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-red-500">2</div>omuz</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-indigo-500">3</div>göğüs</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-lime-500">4</div>arma</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-sky-500">5</div>kol</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-emerald-500">6</div>etek</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-yellow-500">7</div>bel</li>
            </ul>
            <ul class=" h-64 cursor-pointer basis-1/3 flex flex-col" :class="{'opacity-40' : selector !=2, 'opacity-100':selector==2}" @click="selector=2" @mouseover="selector=2" >
                <h3 class="font-extrabold text-xl">Sweat</h3>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-orange-500">1</div>kolye</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-red-500">2</div>omuz</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-indigo-500">3</div>göğüs</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-lime-500">4</div>arma</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-fuchsia-500">5</div>kol</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-emerald-500">6</div>bilek</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-yellow-500">7</div>etek</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-sky-500">8</div>bel</li>
            </ul>
            <ul class=" h-64 cursor-pointer basis-1/3 flex flex-col" :class="{'opacity-40' : selector !=3, 'opacity-100':selector==3}" @click="selector=3" @mouseover="selector=3" >
                <h3 class="font-extrabold text-xl">Arka</h3>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-blue-500">1</div>boyun</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-red-500">2</div>sırt</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-green-500">3</div>omuz</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-amber-500">4</div>etek</li>
                <li class="flex items-center justify-start gap-2"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-fuchsia-500">5</div>kol</li>
                <li class="flex items-center justify-start gap-2 mt-auto"><div class="w-4 h-4 rounded-full text-xs text-center text-white bg-cyan-500">6</div>hoodie <br/>şapka</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import store from "/src/store"

const selector = ref(1)
</script>