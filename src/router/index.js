import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";    
 const routes=[ {                                                  
         path:'/',                                                 
         name:'Home',                                              
         component: ()=> import ("/src/router/views/HomePage.vue")       
     },
     {                                                  
        path:'/b06b',                                                 
        name:'Deneme',                                              
        component: ()=> import ("/src/router/views/DenemePage.vue")       
    },
     {                                                  
        path:'/b06b1',                                                 
        name:'Deneme1',                                              
        component: ()=> import ("/src/router/views/MainPage.vue")       
    }]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory (),                               
     routes,                                                       
 })                                                                
 export default router; 