"use client"

import React, { Suspense, useEffect, useRef } from 'react'
import { Billboard, OrbitControls, Text } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { CarType } from "@/app/common/types/car.type"
import { cars } from '@/_test-data/cars'
import * as THREE from "three"


import dynamic from 'next/dynamic'

const CarHeader: React.FC<({ car: CarType })> = ({ car })=> {

  return (
    <Billboard
    follow={true}
    lockX={false}
    lockY={false}
    lockZ={false}
  >
    <Text 
      fontSize={1}
      fontWeight={"bold"}
      color="white"
      anchorY="bottom"
      anchorX="center"
      position={[0, 5, 0]}
    >
      {car.model}
    </Text>
    <Text 
      fontSize={1}
      fontWeight={"light"}
      color="white"
      anchorY="bottom"
      anchorX="center"
      position={[0, 3.8, 0]}
    >
      {car.dealer}
    </Text>
  </Billboard>
  )
}

const CarFormation3DItem: React.FC<{ car: CarType, position: THREE.Vector3, rotation: THREE.Euler }> = ({ car, position, rotation }) => {
  const CarModel = dynamic<{
    rotation: THREE.Euler
  }>(() => import(`${car.componentPath}`).then((mod) => mod.default))
  
  return (
    <Suspense fallback={null}>
      <group position={position}>
      <CarHeader car={car} />
      <CarModel rotation={rotation} />
      </group>
    </Suspense>
  )
}

const CarFormation3D: React.FC = () => {
  const totalCars = cars.length
  const radius = totalCars * 7
  const deflection = 0.5

  const getAngle = (index: number) => {
    return (index / totalCars) * 2 * Math.PI
  }

  const getCarPosition = (index: number) => {
    const angle = getAngle(index)
    const x = radius * Math.cos(angle)
    const z = radius * Math.sin(angle)

    return new THREE.Vector3(x, 0, z)
  }


  const getCarRotation = (index: number) => {
    const angle = getAngle(index) + deflection
    return new THREE.Euler(0, -angle - Math.PI / 2, 0)
}

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
      {cars.map((car, index) => (
        <CarFormation3DItem key={index} car={car} position={getCarPosition(index)} rotation={getCarRotation(index)}/>
      ))}
           
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
          <circleGeometry args={[radius + 10, 64]} />
          <meshStandardMaterial color="black" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}

export default CarFormation3D

// enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}