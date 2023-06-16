<template>

        <div class="pane  " id="pane2">
                <div class="stitch "></div>
                <div id="stitching_group">
                  <div class="sewing-machine">
                    <div class="needle">
                      <div class="needle-left-half"></div>
                      <div class="needle-right-half"></div>
                    </div>
                    <div class="top-thread"></div>
                  </div>
                  <div class="bottom-cloth"></div>
                </div>
                <div class="machine-top"></div>
              </div>

    
    </template>
    
    <script setup>
    </script>
    
    <style >
    :root {
    
    
    
    
    
        
        
        
        /* needle pane */
        /* --stitching-background: rgb(255, 56, 115); */
        --stitching-background: rgb(185 28 28);
      --thread: rgb(255, 255, 255);
      --bottom-cloth: rgb(5, 4, 4);
      --top-margin: 2rem;
      --needle-duration: 0.5s;
    }
    
    
    
    
    .padding-class {
        margin: 0 auto;
        width: 90%;
        padding: 1rem 0;
        max-width: 60rem;
    }
    
    
    
    .pane {
      display: block;
      overflow: hidden;
      min-width: 16rem;
      max-width: 16rem;
      min-height: 16rem;
      max-height: 16rem;
      
      background-color: white;

      
      font-size: 1.2rem;
    }
    
    #comic {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      padding-top: 2rem;
    }
    
    
    
    /**
      Pane 2
    **/
    #pane2 {
      background-color: var(--stitching-background);
      position: relative;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #pane2:hover::after {
      opacity: 1;
    }
    
    
    
    #pane2::before {
      content: '';
      display: block;
      
      position: absolute;
      width: 100%;
      height: 50%;
      background-color: var(--bottom-cloth);
      bottom: 0;
    }
    
    #pane2 .machine-top {
      position: absolute;
      left: 0;
      top: 0;
      height: 1rem;
      width: 70%;
      background-color: #aeaeae;
    }
    #pane2 .machine-top::before {
      content: '';
      display: block;
      position: absolute;
      border-bottom-right-radius: 40%;
      border-bottom-left-radius: 10%;
      top: 0;
      right: 0;
      border: var(--top-margin) outset #aeaeae;
      border-top: 0;
      height: 0;
      width: 20%;
      background-color: #eaeaea;
    }
    
    #stitching_group {
      width: 100%;
      min-height: inherit;
      position: relative;
      left: 0;
      top: var(--top-margin);
    }
    
    #pane2 .stitch {
      margin-top: 0.5rem;
      background-color: transparent;
      width: 4rem;
      border-radius: 50%;
      border: 0.2rem solid var(--thread);
      clip-path: inset(0 0 50% 0);
      transform-origin: center left;
      animation: borderStitching var(--needle-duration) infinite ease-in;
      
      position: absolute;
      margin-top: var(--top-margin);
    }
    
    @keyframes borderStitching {
      0% {
        transform: translateX(2.5rem);
        border-radius: 0;
        height: 0;
        clip-path: inset(0 100% 50% 0);
      }
      
      10% {
        transform: translateX(2.4rem);
        border-radius: 0;
        height: 0;
        clip-path: inset(0 99% 50% 0);
      }
      
      15% {
        width : 0.2rem;
        transform: translateX(2.4rem) scaleY(1.8);
        border-radius: 0;
        height: 0.5rem;
        clip-path: inset(0 99% 52% 0);
      }
      
      50% {
        transform: translateX(0rem) scaleY(2);
        width: 4rem;
        height: 2.2rem;
        border-radius: 50%;
        border: 0.15rem solid var(--thread);
        border-top-right-radius: 0;
        border-right: 0;
        border-bottom: 0;
        clip-path: inset(0 40% 50% 0);
      }
      
      75% {
        transform: translateX(-1.9rem) scaleY(1);
        width: 4rem;
        height: 1rem;
        border-top-left-radius: 50%;
        border: 0.2rem solid var(--thread);
        border-right: 0;
    
        clip-path: inset(0 0 0.35rem 0);
      }
      
      90% {
        transform: translateX(-1.9rem);
        width: 4rem;
        height: 0.6rem;
        border-radius: 20%;
        border: 0.2rem solid var(--thread);
    
        clip-path: inset(0 0 0.35rem 0);
      }
      
      100% {
        transform: translateX(-2.2rem);
        border-radius: 0;
        border-left: 0;
        border-right: 0;
        height: 0.5rem;
      }
    }
    
    #pane2 .sewing-machine {
      position: absolute;
      top: 0;
      animation: stitchingNeedle var(--needle-duration) infinite ease-in;
      width: 100%;
      height: 100%;
      
      display: flex;
      justify-content: center;
    }
    
    #pane2 .sewing-machine .needle {
      position: relative;
      box-sizing: border-box;
    
      width: 1rem;
      height: 70%;
    
      clip-path: polygon(
        0 0,
        0 80%,
        50% 100%,
        100% 80%,
        100% 50%,
        100% 0,
        51% 0,
        51% 75%,
        62% 80%,
        51% 85%,
        39% 80%,
        51% 75%,
        51% 0
      );
    
    }
    
    @keyframes stitchingNeedle {
      0% {
        transform: translateY(0.2rem) scaleY(1.1);
      }
      
      50% {
        transform: translateY(-3.2rem);
      }
      
      75% {
        transform: translateY(-1.5rem);
      }
      
      90% {
        transform: translateY(-0.5rem);
      }
      
      100% {
        transform: translateY(0.2rem) scaleY(1.1);
      }
    }
    
    #pane2 .needle-left-half {
      position: absolute;
      left: 0;
      
      background-color: #aeaeae;
      width: 50%;
      height: 100%;
      z-index: 1;
    }
    
    #pane2 .needle-right-half {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      
      height: 100%;
      width: 50%;
      
      background-color: #eaeaea;
    }
    
    #pane2 .sewing-machine .top-thread {
      position: absolute;
      margin-left: -0.15rem;
      top: -0.4rem;
      height: 60%;
      width: 1.4rem;
      border: 0.2rem solid var(--thread);
      border-bottom-right-radius: 50%;
      border-top: 0;
      border-left: 0;
      clip-path: inset(0 0 0 54%);
      animation: topThread var(--needle-duration) infinite ease-in;
    }
    
    @keyframes topThread {
      0% {
        width: 1.4rem;
        border-bottom-right-radius: 50%;
      }
      
      50% {
        width: 2.5rem;
        border-bottom-right-radius: 40%;
      }
      
      90% {
        width: 1.5rem;
        border-bottom-right-radius: 50%;
        clip-path: inset(0 0 0 48%);
    
      }
    }
    
    .bottom-cloth {
      position: absolute;
      left: 0;
      bottom: 0.25rem;
      width: 100%;
      height: 50%;
    }
    
    .bottom-cloth::before {
      content: '';
      display: block;
      height: 0.5rem;
      width: 50%;
      background-image: 
        linear-gradient(
          0.25turn,
          var(--thread),
          var(--thread) 4rem,
          transparent 4rem
        );
      background-size: 12rem 0.25rem;
      background-position: 4rem;
      background-repeat: repeat-x;
      animation: stitchline var(--needle-duration) infinite ease-out;
    }
    
    @keyframes stitchline {
      0% {
          background-position: 4rem;
      }
      
      50% {
          background-position: 0rem;
      }
      
      100% {
          background-position: -4rem;
      }
    }
    
    .bottom-cloth::after {
      content: '';
      display: block;
      
      width: 100%;
      height: 49%;
      bottom: 0;
      
      animation: stitchingHole var(--needle-duration) infinite ease-in;
    }
    
    @keyframes stitchingHole {
      0% {
        background-image: radial-gradient(
          ellipse at 50% 0%,
          transparent,
          transparent 0.45rem,
          #c45d49 0.55rem,
          var(--bottom-cloth) 0.55rem);
      }
      20% {
          background-image: radial-gradient(
          ellipse at 50% 0%,
          transparent,
          transparent 0.15rem,
          #c45d49 0.35rem,
          var(--bottom-cloth) 0.35rem);          
      }
      30% {
        background-image: radial-gradient(
          ellipse at 50% 0%,
          transparent,
          transparent 0.1rem,
          #c45d49 0.15rem,
          var(--bottom-cloth) 0.15rem); 
      }
      50% {
        background-image: none;
      }
      70% {
         background-image: radial-gradient(
          ellipse at 50% 0%,
          transparent,
          transparent 0.15rem,
          #c45d49 0.2rem,
          var(--bottom-cloth) 0.2rem); 
      }
      80% {
        background-image: radial-gradient(
          ellipse at 50% 0%,
          transparent,
          transparent 0.25rem,
          #c45d49 0.35rem,
          var(--bottom-cloth) 0.35rem); 
      }
      
      90% {
            background-image: radial-gradient(
            ellipse at 50% 0%,
            transparent,
            transparent 0.35rem,
            #c45d49 0.45rem,
            var(--bottom-cloth) 0.45rem);
      }
      100% {
          background-image: radial-gradient(
            ellipse at 50% 0%,
            transparent,
            transparent 0.4rem,
            #c45d49 0.5rem,
            var(--bottom-cloth) 0.5rem);
      }
    }
    
    
    
    
    </style>