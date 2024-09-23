"use client"

import React from 'react'
import { Canvas } from "@react-three/fiber"
import Carousel from './carousel/carousel'

const CarFormation3D: React.FC = () => {

  return (
    <Canvas
      className="w-full h-full"
      camera={{
        fov: 40,
        position: [0, 0, 50],
      }}
    >
      <ambientLight intensity={3} />
      <directionalLight position={[0, 5, 5]} intensity={5} />
      <Carousel />
    </Canvas>
  )
}

export default CarFormation3D
