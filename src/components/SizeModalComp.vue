<template>
    <div @click="store.state.modalName=''" class="overflow-hidden h-screen w-screen fixed top-0 left-0 bg-black/40 z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg w-96 h-96 relative">
            <div @click="store.state.modalName=''" class="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white w-6 h-6 text-center cursor-pointer">X</div>
bedededede
        </div>
    </div>
</template>

<script setup>
import store from "/src/store"
</script>