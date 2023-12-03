import React, { Suspense, useEffect, useState, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  OrbitControls,
  Preload,
  useGLTF,
  useDepthBuffer,
  SpotLight,
} from "@react-three/drei"
import { Vector3 } from "three"
import CanvasLoader from "../Loader"

// Computers component representing the 3D model and lights
const Vampire = ({ isMobile }) => {
  const depthBuffer = useDepthBuffer({ frames: 0.1 })
  // Load the 3D model using useGLTF hook
  const vampire = useGLTF("./dracu/scene.gltf")

  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#915EFF"
        position={[5, -8, 0]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#915EFF"
        position={[-5, 0, 0]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#915EFF"
        position={[-5, -8, 0]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#915EFF"
        position={[5, 0, 0]}
      />
      <mesh>
        {/* Hemisphere light for ambient lighting */}
        <hemisphereLight intensity={1.15} />
        {/* Ambient light for additional general lighting */}
        <ambientLight intensity={1.1} />
        {/* Spot light for directional and focused lighting */}
        <spotLight
          position={[-5, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        {/* Point light for additional general lighting */}
        <pointLight
          intensity={100}
          position={[-5, 1, -1]}
          color="red"
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />

        {/* 3D model rendered as a primitive */}

        <primitive
          object={vampire.scene}
          scale={isMobile ? 30 : 30.75}
          position={isMobile ? [-0, -2.5, 0.5] : [0, -2.25, 0.5]}
          rotation={[-0.1, -0.1, -0.1]}
        />
      </mesh>
    </>
  )
}
function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        0
      ),
      0.1
    )
    light.current.target.updateMatrixWorld()
  })
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={80}
      angle={2.5}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  )
}
// ComputersCanvas component containing the 3D scene
const VampireCanvas = () => {
  // State to track whether the application is running on a mobile device
  const [isMobile, setIsMobile] = useState(false)
  // useEffect hook to handle changes to the screen size
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    // Three.js Canvas component
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 50, 90], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Wrap the scene in Suspense with a loading fallback */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls for interactive camera manipulation */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Render the Computers component with the isMobile prop */}

        <Vampire isMobile={isMobile} />
      </Suspense>
      {/* Preload component to load assets before rendering */}
      <Preload all />
    </Canvas>
  )
}

export default VampireCanvas
