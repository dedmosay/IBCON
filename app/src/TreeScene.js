import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model/Model'
import "./styles.css";


export default function ThreeScene() {
  return (
    <div className="ThreeScene">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 3, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, 0, 0]} color="yellow" intensity={20} />
        <pointLight position={[0, 10, 10]} color="blue" intensity={1.5} />
        <Suspense fallback={null}>
          <Model url="/ТестоваяМодель.fbx" position={[0, 0, 0]} />
          <Model url="/roof_expierence.fbx" position={[0, 0, 0]} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
