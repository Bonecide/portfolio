import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Interface } from "../components/Interface";
import { Menu } from "../components/Menu";
import { ScrollManager } from "../components/ScrollManager";
import { LoadingScreen } from "../components/LoadingScreen";
import { BackgroundScene } from "../components/BackgroundScene";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { isDesktop } from "react-device-detect";

export const Home = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.search && !started) {
      setTimeout(() => {
        setSection(Number(location.search[location.search.length - 1]));
      }, 500);
    }
  }, [started, location]);
  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#3C096C"]} />
        {isDesktop ? (
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager
              setMenuOpened={setMenuOpened}
              section={section}
              onSectionChange={setSection}
            />
            <Scroll html>
              <Interface navigate={navigate} setSection={setSection} />
            </Scroll>
          </ScrollControls>
        ) : (
          <ScrollControls pages={3} damping={0}>
            <ScrollManager
              setMenuOpened={setMenuOpened}
              section={section}
              onSectionChange={setSection}
            />
            <Scroll html>
              <Interface navigate={navigate} setSection={setSection} />
            </Scroll>
          </ScrollControls>
        )}
        <BackgroundScene menuIsOpened={menuOpened} />
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
};
