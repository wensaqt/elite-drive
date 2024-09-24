import { cars } from "@/_test-data/cars"

import CarFormation3DItem from "../car-formation-item/car-formation-item"
import useCarouselControls from "./carousel-controls"
import { a } from '@react-spring/three'
import CarouselGround from "./carousel-ground"
import { Group } from "three"

const Carousel = () => {

  const {    
    setCarPosition,
    setCarRotation,
    radius,
    carRefs,
    carouselRef,
    bind,
    rotationY,

 } = useCarouselControls()

  return (
    // @ts-expect-error: wtf is this type i cant fix it so ff
    <a.group {...bind()} ref={carouselRef} rotation-y={rotationY}>
        {cars.map((car, index) => {
        const position = setCarPosition(index);
        const rotation = setCarRotation(index);
        return <CarFormation3DItem 
          key={index} 
          car={car} 
          position={position} 
          rotation={rotation} 
          ref={(el: Group | null) => {
            carRefs.current[index] = el;
          }}
        />
      })}

      <CarouselGround radius={radius} />
  </a.group>
  );
}

export default Carousel