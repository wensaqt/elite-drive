import { cars } from "@/_test-data/cars"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import CarFormation3DItem from "../car-formation-item/car-formation-item"

const Carousel = () => {
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
      <>
      {cars.map((car, index) => (
        <CarFormation3DItem key={index} car={car} position={getCarPosition(index)} rotation={getCarRotation(index)}/>
      ))}
           
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
          <circleGeometry args={[radius + 10, 64]} />
          <meshStandardMaterial color="black" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </>
    )
}

export default Carousel