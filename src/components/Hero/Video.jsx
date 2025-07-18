// import React from 'react'
// import videoMain from '../../assets/significo_main.mp4'

// const Video = () => {

//     return (
//         <div style={{ '--clip': '100%' }} className='vid_cont w-full h-screen absolute top-0 left-0 z-20'>
//             <video src={videoMain} autoPlay loop muted className="w-full h-full object-cover object-center"></video>
//         </div>
//     )
// }

// export default Video


import React, { Suspense, lazy } from "react";

import Heros from "../../modules/Heros";
// const Scene = lazy(() => import("../Scene/Index"));
const Video = () => {
  return (
    <div
      style={{ "--clip": "100%" }}
      className="vid_cont w-full h-screen absolute top-0 left-0 z-20"
    >
      <Suspense fallback={<div>Loading...</div>}>
       <Heros />
      </Suspense>
    </div>
  );
};

export default Video;






















































 
