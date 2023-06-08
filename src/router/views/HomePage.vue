<template>
	<div class="container bg-red-500/40 mx-auto mt-16  flex flex-wrap flex-row items-start justify-start" >
		<h1 class="text-3xl font-bold w-full text-center"> seçili = {{ seçiliAlan }}</h1>
		<div class="  border border-black w-80 relative bg-fuchsia-600 group">
			<img src="/src/assets/pngwing.com.png" alt=""  onerror="this.style.display='none';"  class="">
			<div id="göğüsOrta-parent" @click="alanSec('göğüsOrta')" :class="{' pointer-events-none !border-transparent' : tshirt.göğüsOrta || tshirt.göğüsSağ || tshirt.göğüsSol, }"  class="border border-transparent group-hover:border-black transition-all w-32 h-24 top-20  left-1/2 -translate-x-1/2 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="göğüsOrta"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="göğüsSol-parent" @click="alanSec('göğüsSol')" :class="{' pointer-events-none !border-transparent' : tshirt.göğüsSol || tshirt.göğüsOrta}" class="border border-transparent group-hover:border-black transition-all w-16 h-16 top-20  left-20 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="göğüsSol"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="göğüsSağ-parent" @click="alanSec('göğüsSağ')" :class="{' pointer-events-none !border-transparent' : tshirt.göğüsSağ || tshirt.göğüsOrta}" class="border border-transparent group-hover:border-black transition-all w-16 h-16 top-20  right-20 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="göğüsSağ"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full ">
			</div>
			<div id="kolSağ-parent" @click="alanSec('kolSağ')" :class="{' pointer-events-none !border-transparent' : tshirt.kolSağ}" class="border border-transparent group-hover:border-black transition-all w-12 h-10 top-24  right-0 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="kolSağ"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="kolSol-parent" @click="alanSec('kolSol')" :class="{' pointer-events-none !border-transparent' : tshirt.kolSol}" class="border border-transparent group-hover:border-black transition-all w-12 h-10 top-24  left-0 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="kolSol"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="gerdan-parent"  @click="alanSec('gerdan')" :class="{' pointer-events-none !border-transparent' : tshirt.gerdan}" class="border border-transparent group-hover:border-black transition-all w-32 h-8 top-10  left-1/2 -translate-x-1/2 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="gerdan"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="sağOmuz-parent" @click="alanSec('sağOmuz')" :class="{' pointer-events-none !border-transparent' : tshirt.sağOmuz}" class="border border-transparent group-hover:border-black transition-all w-12 h-12 top-8 right-8 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="sağOmuz"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="solOmuz-parent" @click="alanSec('solOmuz')" :class="{' pointer-events-none !border-transparent' : tshirt.solOmuz}" class="border border-transparent group-hover:border-black transition-all w-12 h-12 top-8 left-8 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="solOmuz"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="solAlt-parent" @click="alanSec('solAlt')" :class="{' pointer-events-none !border-transparent' : tshirt.solAlt}" class="border border-transparent group-hover:border-black transition-all w-12 h-12 bottom-8 left-20 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="solAlt"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
			<div id="sağAlt-parent" @click="alanSec('sağAlt')" :class="{' pointer-events-none !border-transparent' : tshirt.sağAlt}" class="border border-transparent group-hover:border-black transition-all w-12 h-12 bottom-8 right-14 absolute hover:bg-cyan-600/50 cursor-pointer">
				<img id="sağAlt"  alt="" src=""  onerror="this.style.display='none';"  class="opacity-90 ring-0 outline-none object-contain w-full h-full">
			</div>
		</div>
		<button @click="yukle" class="border border-black px-2 py-1 bg-fuchsia-600 text-white  m-2">Yükle</button>

		<div v-if="seçiliAlan != 'aa'" class="flex mt-10 gap-4 flex-wrap ">
			<div @click="foto = 1"  :class="{'border border-black':foto == 1}" class="hover:scale-125">1 <img src="/src/assets/tasarımlar/1.png" class="w-10" alt=""  onerror="this.style.display='none';" ></div>
			<div @click="foto = 2"  :class="{'border border-black':foto == 2}" class="hover:scale-125">2 <img src="/src/assets/tasarımlar/2.png" class="w-10" alt=""  onerror="this.style.display='none';" ></div>
			<div @click="foto = 3"  :class="{'border border-black':foto == 3}" class="hover:scale-125">3 <img src="/src/assets/tasarımlar/3.png" class="w-10" alt=""  onerror="this.style.display='none';" ></div>
			<div @click="foto = 4"  :class="{'border border-black':foto == 4}" class="hover:scale-125">4 <img src="/src/assets/tasarımlar/4.png" class="w-10" alt=""  onerror="this.style.display='none';" ></div>
			<div @click="foto = 5"  :class="{'border border-black':foto == 5}" class="hover:scale-125">5 <img src="/src/assets/tasarımlar/5.png" class="w-10" alt=""  onerror="this.style.display='none';" ></div>
			<button v-if="foto != 0" class="border border-black rounded-lg bg-green-700 text-white w-24 mt-10 h-6" @click="ekle">ekle</button>
		</div>
		<div>
			<ul>
				<li v-for="i in siparis" :key="i" class="flex items-center justify-center p-2 border rounded-lg gap-4"> 
					<p>
						{{i.alan}}
					</p>
					<img :src="fotolar[i.seçilen - 1 ]" class="w-8 bg-white saturate-150 border-black border" alt="">
					<button @click="sil(i)" class="border border-black rounded-lg bg-red-600 text-white w-fit px-2 h-6">sil</button>

				</li>

			</ul>
		</div>
	</div>
	<div v-if="loading" id="loading" class="bg-black/80 opacity-100 transition-all z-[999] fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
		<embroidery-anim-comp></embroidery-anim-comp>
	</div>
</template>


<script setup>
import { ref, watch ,reactive} from "vue";

import embroideryAnimComp from '/src/components/embroideryAnimComp.vue';


import foto1 from "/src/assets/tasarımlar/1.png"
import foto2 from "/src/assets/tasarımlar/2.png"
import foto3 from "/src/assets/tasarımlar/3.png"
import foto4 from "/src/assets/tasarımlar/4.png"
import foto5 from "/src/assets/tasarımlar/5.png"


const fotolar = [
	foto1,
	foto2,
	foto3,
	foto4,
	foto5,

]

const tshirt = reactive({
	göğüsOrta :false,
	göğüsSol :false,
	göğüsSağ :false,
	kolSağ :false,
	kolSol :false,
	gerdan :false,
	sağOmuz :false,
	solOmuz :false,
	solAlt :false,
	sağAlt :false,


})

const seçiliAlan = ref("aa")
const foto = ref(0)
const loading = ref(false)
const siparis = ref([])


watch(seçiliAlan,(newValue,oldValue)=>{

	if(newValue != 'aa')
	{
		const newv = document.querySelector(`#${newValue}-parent`)

		newv.classList.add("border-blue-600")
	}
	if(oldValue != 'aa')
	{
	const oldv = document.querySelector(`#${oldValue}-parent`)
	oldv.classList.remove("border-blue-600")
	}
})

const alanSec = (id)=>{
	seçiliAlan.value=id
}


const ekle=()=>{
	const imgparent = document.querySelector(`#${seçiliAlan.value}-parent`)
	const img = document.querySelector(`#${seçiliAlan.value}`)

	img.setAttribute("src",fotolar[foto.value -1 ])
	img.setAttribute("style","display:inline-flex;")
	imgparent.classList.remove("border-blue-600")

	const tempSecili = seçiliAlan.value
	siparis.value.push({		
		alan : tempSecili,
		seçilen: foto.value,
		ücret : "1 TL"
	})
	tshirt[seçiliAlan.value]=true

	seçiliAlan.value="aa"
	foto.value=0
}
const sil=(i)=>{
	console.log('i :>> ', i);
	const img = document.querySelector(`#${i.alan}`)
	img.setAttribute("src","")
	siparis.value=siparis.value.filter(item => item.alan != i.alan)
	tshirt[i.alan]=false


}

const yukle =()=>{
	loading.value=true
	setTimeout(() => {
		const loadingCont =document.querySelector("#loading")
		loadingCont.classList.add("!opacity-0")
		setTimeout(() => {
			loading.value=false
			
		}, 500);
	}, 2000);
}
</script>


<style scoped>
</style>