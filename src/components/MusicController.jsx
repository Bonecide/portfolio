import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { musicAtom } from "../atoms/music.atom";

export const MusicController = () => {
  const [music, setMusic] = useState(null);
  const [musicIsPlayed, setMusicIsPlayed] = useAtom(musicAtom);

  useEffect(() => {
    const newMusic = new Audio("/music.mp3");
    setMusic(newMusic);
  }, []);

  useEffect(() => {
    if (musicIsPlayed) {
      if (music) {
        music.volume = 0.3;
        music.play();
        setMusicIsPlayed(true);
      }
    } else {
      if (music) {
        music.pause();

        setMusicIsPlayed(false);
      }
    }
  }, [musicIsPlayed, music]);

  return null;
};
