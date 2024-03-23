import React from 'react'

export default function Swiper() {
  return (
    <>
       <div class="swiper-top">
         
         <div class="swiper-slide-pagination"></div>
        
         <div class="hero-slider-bg-controls-wrapper">
          
             <div class="hero-slider-bg-controls">
                 <div class="swiper-slide-controls swiper-slide-controls-dark slide-prev">
                     <div class="ion-ios-arrow-left"></div>
                 </div>
                 <div class="swiper-slide-controls slide-next">
                     <div class="ion-ios-arrow-right"></div>
                 </div>
             </div>
            
             <div class="swiper-slide-controls-play-pause-wrapper swiper-slide-controls-play-pause slider-on-off">
                 <div class="slider-on-off-switch">
                     <i class="ion-ios-play"></i>
                 </div>
                
                 <div class="slider-progress-bar">
                     <span>
                         <svg class="circle-svg" height="50" width="50">
                             <circle class="circle" cx="25" cy="25" fill="none" r="24" stroke="#ffffff" stroke-width="2"></circle>
                         </svg>
                     </span>
                 </div>
                
             </div>
           
         </div>
      
     </div>
    </>
  )
}
