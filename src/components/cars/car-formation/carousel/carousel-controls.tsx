import { cars } from "@/_test-data/cars"
import { SpringValue, useSpring } from "@react-spring/three"
import { useThree } from "@react-three/fiber"
import { useDrag } from "@use-gesture/react"
import { useRef } from "react"
import * as THREE from "three"
const useCarouselControls = () => {
    const totalCars = cars.length
    const radius = totalCars * 7
    const carRefs = useRef<(THREE.Group | null)[]>([]); 
    const carouselRef = useRef<THREE.Group>(null); 
    const deflection = 0.5
            const { camera } = useThree();

    const getAngle = (index: number) => {
      return (index / totalCars) * 2 * Math.PI
    }
  
    const setCarPosition = (index: number) => {
      const angle = getAngle(index)
      const x = radius * Math.cos(angle)
      const z = radius * Math.sin(angle)
  
      return new THREE.Vector3(x, 0, z)
    }
  
    const setCarRotation = (index: number) => {
      const angle = getAngle(index) + deflection
      return new THREE.Euler(0, -angle - Math.PI / 2, 0)
    }
    const getNearestCarIndex = () => {
        let nearestIndex = -1;
        let minDistance = Infinity;
      
        carRefs.current.forEach((carRef, index) => {
          if (carRef) {
            const carPosition = carRef.position;
            const distance = carPosition.distanceTo(camera.position);

            if (distance < minDistance) {
              minDistance = distance;
              nearestIndex = index;
            }
          }
        });
      
        return nearestIndex;
    };

    const [{ rotationY }, api] = useSpring(() => ({ rotationY: 0}));

    const rotateCarousel = (memo: number, mx: number, last: boolean) => {
        console.log
        if(last) {
            const index = getNearestCarIndex()
            console.log(index)
        }
        return memo + mx * 0.005
    }

    const bind = useDrag(({ memo = rotationY.get(), movement: [mx], last }) => {
        console.log(carRefs.current[1]?.position)
      api.start({
        rotationY: rotateCarousel(memo, mx, last),
        config: {
          tension: 200,
          friction: 50,
        },
      });
    });



  return {
    setCarPosition,
    setCarRotation,
    radius,
    carRefs,
    carouselRef,
    bind,
    rotationY,
  }
}

export default useCarouselControls