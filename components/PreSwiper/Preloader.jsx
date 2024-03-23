import React from 'react'

export default function Preloader() {
  return (
   <>
     <div class="preloader-bg"></div>
        <div id="preloader">
            <div id="preloader-status">
                <div class="preloader-position loader">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="preloader-after">
            <div class="preloader-after-inner"></div>
        </div>
   </>
  )
}
