import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar />
      </group>
    </>
  );
};
