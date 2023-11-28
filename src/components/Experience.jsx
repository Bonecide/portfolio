import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Scene } from "./Scene";
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
        enablePan={false}
        enableRotate={width > 800}
        autoRotate={true}
        autoRotateSpeed={1} // Adjust this value
        enableZoom={false}
      />
      {/* <Sky
        distance={450000} // Camera distance (default is 400000)
        sunPosition={[0, 1, 0]} // Sun position at zenith
        inclination={0.25} // Sun elevation (from 0 to 1)
        azimuth={0.3} // Sun rotation around the Y axis (from 0 to 1)
      /> */}
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
