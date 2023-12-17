import { MenuButton } from "./MenuButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { FaVolumeDown, FaVolumeMute } from "react-icons/fa";
import { useAtom } from "jotai";
import { musicAtom } from "../atoms/music.atom";

export const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => {

  const [musicIsPlayed, setMusicIsPlayed] = useAtom(musicAtom);
  const playMusic = useCallback(() => {
    setMusicIsPlayed(true);
  }, [setMusicIsPlayed]);

  const stopMusic = useCallback(() => {
    setMusicIsPlayed(false);
  }, [setMusicIsPlayed]);

  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => (musicIsPlayed ? stopMusic() : playMusic())}
        className={`z-40 fixed top-12 
           right-[110px] p-3 bg-indigo-600 w-11 h-11 rounded-md transition-all flex items-center justify-center`}
      >
        {!musicIsPlayed ? (
          <FaVolumeMute className="w-[50px] h-[50px] text-white" />
        ) : (
          <FaVolumeDown className="w-[35px] h-[35px] text-white" />
        )}
      </button>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`z-40 fixed top-12 
           right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md transition-all`}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white md:bg-white/70 transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="About"
            onClick={() => {
              navigate("/");
              onSectionChange(0);
            }}
          />
          <MenuButton
            label="Skills"
            onClick={() => {
              if (onSectionChange) {
                onSectionChange(1);
              }

              navigate("/?section=1");
            }}
          />
          <MenuButton
            label="Experience"
            onClick={() => {
              navigate("/experience");
            }}
          />
          <MenuButton
            label="Contact"
            onClick={() => {
              if (onSectionChange) {
                onSectionChange(2);
              }
              navigate("/?section=2");
            }}
          />
        </div>
      </div>
    </>
  );
};
