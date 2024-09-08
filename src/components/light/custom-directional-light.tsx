import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

interface CustomDirectionalLightProps {}

const CustomDirectionalLight = (props: CustomDirectionalLightProps) => {
    const dirLight = useRef<DirectionalLight>(null);
    // @ts-expect-error typescript not happy with null
    useHelper(dirLight, DirectionalLightHelper, 1, "red");

    return (
        <directionalLight
            ref={dirLight}
            intensity={5}
            position={[10, 10, 10]}
            color={"white"}
        />
    );
};

export default CustomDirectionalLight;
