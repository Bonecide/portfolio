import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Scene } from "./Scene";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });
  return (
    <>
      <OrbitControls
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1} // Adjust this value
        enableZoom={false}
      />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <group position={[-0.2, 0, -0.7]} rotation-y={Math.PI * 0.9}>
          <Avatar animation={animation} />
        </group>

        <Scene />
      </group>
    </>
  );
};
