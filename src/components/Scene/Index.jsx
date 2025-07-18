import { Canvas } from "@react-three/fiber";
import Model from "./Model.jsx";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <>
      <Canvas style={{ background: "#ffffff" }}>
        <Model />
        <directionalLight intensity={1} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>
      <div>helllo world</div>
    </>
  );
}
