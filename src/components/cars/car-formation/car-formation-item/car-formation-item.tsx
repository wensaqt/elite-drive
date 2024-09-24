import { CarType } from "@/app/common/types/car.type"
import { Billboard, Text } from "@react-three/drei"
import dynamic from "next/dynamic"
import { forwardRef, Suspense } from "react"
import * as THREE from "three"

const CarFormation3DItem = forwardRef<THREE.Group, { car: CarType; position: THREE.Vector3; rotation: THREE.Euler }>(
    ({ car, position, rotation }, ref) => {

      const getCarComponent = () => {
        const formattedName = car.model.toLowerCase().replace(/\s+/g, '-');
        console.log(formattedName);
        return import(`public/component-models/${formattedName}.jsx`).then((mod) => mod.default);
      };
  
      const CarHeader: React.FC<{ car: CarType }> = ({ car }) => (
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
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
      );
  
      const CarModel = dynamic<{ rotation: THREE.Euler }>(() => getCarComponent());
  
      return (
        <Suspense fallback={null}>
          <group position={position} ref={ref}>
            <CarHeader car={car} />
            <CarModel rotation={rotation} />
          </group>
        </Suspense>
      );
    }
  );
  
  CarFormation3DItem.displayName = "CarFormation3DItem";
  
  export default CarFormation3DItem;