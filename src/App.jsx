import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useRef, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  const scrollControlsRef = useRef();
  const handleTouchMove = (e) => {
    if (scrollControlsRef.current) {
      const deltaY = e.touches[0].clientY - e.touches[0].clientY;
      scrollControlsRef.current.onScroll(deltaY);
    }
  };
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#3C096C"]} />
        <ScrollControls onTouchMove={handleTouchMove} pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
            <Interface />
          </Scroll>
          <Experience />
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  );
}

export default App;
