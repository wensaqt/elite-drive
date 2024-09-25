import { cars } from "@/_test-data/cars"

import CarFormation3DItem from "../car-formation-item/car-formation-item"
import useCarouselControls from "./carousel-controls"
import { a } from '@react-spring/three'
import CarouselGround from "./carousel-ground"
import { Line } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"


const Carousel = () => {

  const {    
    setCarPosition,
    setCarRotation,
    radius,
    carouselRef,
    bind,
    carouselRotation,

 } = useCarouselControls()

 const { camera } = useThree();

  return (
    // @ts-expect-error: wtf is this type i cant fix it so ff
    <a.group {...bind()} ref={carouselRef} rotation={carouselRotation.to(y => [0, y as number, 0])}>
        {cars.map((car, index) => {
        const position = setCarPosition(index);
        const rotation = setCarRotation(index);
        return <CarFormation3DItem 
          key={index} 
          car={car} 
          position={position} 
          rotation={rotation} 
        />
      })}
           <Line
        points={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(camera.position.x, camera.position.y, camera.position.z)]}
        color="red" // Couleur de la ligne
        lineWidth={2} // Épaisseur de la ligne
      />
      <CarouselGround radius={radius} />
  </a.group>
  );
}

export default Carousel