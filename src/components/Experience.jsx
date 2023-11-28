import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Scene } from "./Scene";
import { isDesktop, isTablet } from "react-device-detect";
import { useState } from "react";
export const Experience = () => {
  const [width] = useState(window.innerWidth);
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });
  return (
    <>
      <OrbitControls
        enableRotate={width > 800}
        autoRotate={true}
        autoRotateSpeed={1} // Adjust this value
        enableZoom={false}
      />
      <Sky />
      <Environment preset="sunset" />
      <group scale={width > 800 ? 1 : 0.6} position-y={-1}>
        <group position={[-0.2, 0, -0.7]} rotation-y={Math.PI * 0.9}>
          <Avatar animation={animation} />
        </group>

        <Scene />
      </group>
    </>
  );
};
