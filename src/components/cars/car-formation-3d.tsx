"use client"

import React from 'react'
import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { CarType } from "@/app/common/types/car.type"
import { cars } from '@/_test-data/cars'
import * as THREE from "three"

import { Bmw } from "./models/bmw"
import { BugattiVeyron } from "./models/bugatti"
import { Honda } from "./models/honda"

// should change this trash import system because i want it to be dynamic not static but aaaaaaaa

type CarComponentType = React.ComponentType<any>;

const carComponents: Record<string, CarComponentType> = {
  'bmw': Bmw,
  'bugatti': BugattiVeyron,
  'honda': Honda,
}

const DynamicCarModel: React.FC<{ componentName: string, position: THREE.Vector3, rotation: THREE.Euler }> = ({ componentName, position, rotation }) => {
  const CarComponent = carComponents[componentName as keyof typeof carComponents]
  if (!CarComponent) {
    console.error(`No component found for ${componentName}`)
    return null
  }
  return <CarComponent position={position} rotation={rotation} />
}

const CarFormation3DItem: React.FC<{ car: CarType, position: THREE.Vector3, rotation: THREE.Euler }> = ({ car, position, rotation }) => {

  const componentName = car.componentPath.split('/').pop()?.split('.')[0]
  if (!componentName) {
    console.error(`Invalid component path: ${car.componentPath}`)
    return null
  }
  return (
    <DynamicCarModel componentName={componentName} position={position} rotation={rotation} />
  )
}

const CarFormation3D: React.FC = () => {
  const totalCars = cars.length
  const radius = totalCars * 7

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
    const angle = getAngle(index)
    return new THREE.Euler(0, -angle - Math.PI / 2, 0)
}

  return (
    <Canvas
      className="w-full h-full"
      camera={{
        fov: 20,
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