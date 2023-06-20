<template>
    <div  class="font-TT-Alientz-Var overflow-hidden h-screen w-screen fixed top-0 left-0 bg-black/40 z-50 flex items-center justify-center ">
        <div  class="bg-white rounded-lg w-96  relative z-[60] flex items-start justify-center p-6 flex-wrap gap-4">
            <div @click="store.state.modalName=''" class="group p-1 shadowing absolute -top-2 -right-2 rounded-full bg-red-500 hover:bg-red-700 text-white w-10 h-10 text-center cursor-pointer flex items-center justify-center">
                <svg class="fill-white group-hover:animate-spin p-1 w-full h-full border-2 border-dashed border-white rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="20" height="20">
<g>
	<path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
</g>
                </svg>
            </div>
            <h3 class="text-sm">Ölçüleri alırken bedeninize uygun bir kıyafeti ütü pozisyonunda düz bir zemine koyup en ve boy ölçülerini tabloyla karşılaştırabilirsiniz.</h3>
            <div class="basis-full ">
                <img src="/src/assets/t-shirt-beden.png" alt="size-tshirt" class="mx-auto" loading="lazy">
            </div>

            <table class="text-center">
                <thead>
                    <tr>
                        <th class="text-amber-500 p-2 font-bold">Beden</th>
                        <th class="text-indigo-500 p-2 font-bold">göğüs ölçüsü</th>
                        <th class="text-lime-500 p-2 font-bold">boy ölçüsü</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="border-b-2 border-amber-500">S</th>
                        <td class="border-b-2 border-indigo-500 text-indigo-500"><strong class="font-bold text-black">51</strong> cm</td>
                        <td class="border-b-2 border-lime-500 text-lime-500"><strong class="font-bold text-black">68</strong> cm</td>
                    </tr>
                    <tr>
                        <th class="border-b-2 border-amber-500">M</th>
                        <td class="border-b-2 border-indigo-500 text-indigo-500"><strong class="font-bold text-black">54</strong> cm</td>
                        <td class="border-b-2 border-lime-500 text-lime-500"><strong class="font-bold text-black">71</strong> cm</td>
                    </tr>
                    <tr>
                        <th class="border-b-2 border-amber-500">L</th>
                        <td class="border-b-2 border-indigo-500 text-indigo-500"><strong class="font-bold text-black">57</strong> cm</td>
                        <td class="border-b-2 border-lime-500 text-lime-500"><strong class="font-bold text-black">74</strong> cm</td>
                    </tr>
                    <tr>
                        <th class="border-b-2 border-amber-500">XL</th>
                        <td class="border-b-2 border-indigo-500 text-indigo-500"><strong class="font-bold text-black">60</strong> cm</td>
                        <td class="border-b-2 border-lime-500 text-lime-500"><strong class="font-bold text-black">76</strong> cm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import store from "/src/store"
</script>