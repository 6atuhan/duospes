<template>
    <div>
        <div class=" text-3xl text-center  h-10  font-bold font-TT-Alientz-Serif drop-shadow-md tracking-widest">
            <h1 class=" w-fit h-10 mx-auto ">duospes</h1>
        </div>
        <div>
        <ul class="flex justify-center items-center gap-10 my-4 font-TT-Alientz-Var flex-wrap ">
            <li v-for="i in 5" :key="i" class="  border-b-2 px-2 border-transparent cursor-pointer" :class="{'hover:border-pink-ds' : store.state.selector==false , 'hover:border-blue-ds' : store.state.selector==true}"> menu {{ i }}</li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import store from "/src/store"
</script>