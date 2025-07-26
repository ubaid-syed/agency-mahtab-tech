import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// Slow down the star rotation for a more subtle, "like a star" effect
const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
    <Points
      ref={ref}
      stride={3}
      positions={new Float32Array(sphere)}
      frustumCulled
      {...props}
    >
      <PointMaterial
        transparent
        color="#fff"
        size={0.002}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;


// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// // Zoom out: move camera further back (z: 2 -> z: 2.5 or 3), and make the star sphere a bit smaller
// const StarBackground = (props) => {
//   const ref = useRef();
//   // Reduce radius for more zoomed-out effect (was 1.2)
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.0 })
//   );

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled
//         {...props}
//       >
//         <PointMaterial
//           transparent
//           color="#fff"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => (
//   <div className="w-full h-auto fixed inset-0 z-[20]">
//     {/* Move camera further back for zoom out (z: 1 -> z: 2.5) */}
//     <Canvas camera={{ position: [0, 0, 2.5] }}>
//       <Suspense fallback={null}>
//         <StarBackground />
//       </Suspense>
//     </Canvas>
//   </div>
// );

// export default StarsCanvas;
