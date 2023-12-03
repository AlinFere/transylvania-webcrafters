import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import * as THREE from "three"

import CanvasLoader from "../Loader"

const Writer = () => {
  const write = useGLTF("./typewriter/scene.gltf")

  return (
    <mesh>
      {/* Hemisphere light for ambient lighting */}

      <primitive
        object={write.scene}
        scale={0.1}
        position-z={0}
        rotation-z={0}
      />
    </mesh>
  )
}

const WriterCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45, //field of view
        near: 0.1,
        far: 200,
        position: [-5, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate />
        <hemisphereLight intensity={4.15} groundColor="black" />
        {/* Ambient light for additional general lighting */}
        <ambientLight intensity={2.5} />
        {/* Spot light for directional and focused lighting */}
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        {/* Point light for additional general lighting */}
        <pointLight intensity={1} />
        <Writer />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default WriterCanvas
