import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Scene } from "./Scene";
import { useState } from "react";
export const BackgroundScene = () => {
  const [width] = useState(window.innerWidth);

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableRotate={width > 800}
        autoRotate={true}
        autoRotateSpeed={1}
        enableZoom={false}
      />
      <Environment preset="sunset" />
      <group scale={width > 800 ? 1 : 0.6} position-y={-1}>
        <group position={[-0.2, 0, -0.7]} rotation-y={Math.PI * 0.9}>
          <Avatar />
        </group>

        <Scene />
      </group>
    </>
  );
};
