import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

const  Model = ({ url }) => {
  const fbx = useLoader(FBXLoader,url);

  return (
    <>
      <primitive object={fbx} scale={0.02} />
    </>
  );
};

export default function ThreeScene() {
  return (
    <div className="ThreeScene">
       <Canvas >
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
            <mesh position={[0.5, 0, -0.5]}>
          <Model  url="/QuickCube.fbx"/>
          </mesh>
          <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
