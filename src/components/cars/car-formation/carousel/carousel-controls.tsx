import { cars } from "@/_test-data/cars"
import { useSpring } from "@react-spring/three"
import { useThree } from "@react-three/fiber"
import { useDrag } from "@use-gesture/react"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const useCarouselControls = () => {
    const totalCars = cars.length
    const radius = totalCars * 7
    const carouselRef = useRef<THREE.Group>(null); 
    const deflection = 0.5
    const { camera } = useThree();

    const getAngle = (index: number) => {
		console.log((index / totalCars) * 2 * Math.PI)
      return (index / totalCars) * 2 * Math.PI
    }
  
    const setCarPosition = (index: number) => {
      const angle = getAngle(index)
      const x = radius * Math.sin(angle)
      const z = radius * Math.cos(angle)
  
      return new THREE.Vector3(x, 0, z)
    }
  
    const setCarRotation = (index: number) => {
      const angle = getAngle(index) + deflection
      return new THREE.Euler(0, angle + Math.PI / 2, 0)
    }

    const getNearestCarWorldPosition = () => {
      let nearestPosition = new THREE.Vector3();
      let minDistance = Infinity;
  
      carouselRef.current?.children.forEach((children) => {
          const carPosition = new THREE.Vector3();
          children.getWorldPosition(carPosition);

          const distance = carPosition.distanceTo(camera.position);

          
          if (distance < minDistance) {
              minDistance = distance;
              nearestPosition.copy(carPosition); 
          }
      });
  
      return nearestPosition; 
  };

  const [{ carouselRotation }, api] = useSpring(() => ({ carouselRotation:  0 }));

  const rotateCarousel = (memo: number, mx: number, last: boolean) => {
    if (last) {
      const nearestCarPosition = getNearestCarWorldPosition();
      const cameraPosition = camera.position;
  
      if (nearestCarPosition && Math.abs(nearestCarPosition.x - cameraPosition.x) > 0.01) {}
    }
  
    return memo + mx * 0.005;
  };

    const bind = useDrag(({ memo = carouselRotation.get(), movement: [mx], last }) => {
      api.start({
        carouselRotation: rotateCarousel(memo, mx, last),
        config: {
          tension: 200,
          friction: 50,
        },
      });
    });

    useEffect(() => {
      const interval = setInterval(() => {
        console.log("Camera:", camera);
        console.log("Carousel Reference:", carouselRef.current);
      }, 5000);
  
      // Nettoyage de l'intervalle à la destruction du composant
      return () => clearInterval(interval);
    }, [camera, carouselRef]);



  return {
    setCarPosition,
    setCarRotation,
    radius,
    carouselRef,
    bind,
    carouselRotation,
  }
}

export default useCarouselControls