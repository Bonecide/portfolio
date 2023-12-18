import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Scene } from "./Scene";
import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config/config";
import { useFrame } from "@react-three/fiber";

export const BackgroundScene = ({ menuIsOpened }) => {
  const [width] = useState(window.innerWidth);
  const [rotation, setRotation] = useState(0);
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuIsOpened ? 1 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuIsOpened ? 1 : 0, {
      ...framerMotionConfig,
    });
  }, [menuIsOpened]);

  useFrame((state, delta) => {
    setRotation((prev) => prev + delta * 0.2);
    state.camera.position.x = cameraPositionX.get();
    state.camera.position.y = 0.3;
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  return (
    <>
      <Environment preset="sunset" />
      <group
        scale={width > 800 ? 1 : 0.6}
        position-y={-1}
        position-z={-1}
        rotation={[0, rotation, 0]} // Применяет вращение к группе
      >
        <group position={[-0.2, 0, -0.7]} rotation-y={Math.PI * 0.9}>
          <Avatar />
        </group>

        <Scene />
      </group>
    </>
  );
};
