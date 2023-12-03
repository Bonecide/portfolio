import { useState } from "react";
import { Menu } from "../components/Menu";
import { AllSkills } from "../features/AllSkills";

export const Experience = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="bg-[#08001A] w-full min-h-full">
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <AllSkills/>
    </div>
  );
};
