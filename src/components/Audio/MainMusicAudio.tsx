import React, {useEffect, useRef} from "react";
import {Audio, Vector3} from "three";
import {PositionalAudio} from "@react-three/drei";
import music from '~/assets/audio/cat_music.mp3?url';
import useAudioStore from "~/store/AudioStore";

const MainMusicAudio: React.FC = () => {
  const mainMusic = useRef<Audio>(null!);
  const isPlayMainMusic = useAudioStore((state) => (state.mainMusic));

  useEffect(() => {
    if (isPlayMainMusic) {
      mainMusic.current.play();
    }
  }, [isPlayMainMusic])

  return <PositionalAudio position={new Vector3(0, 0, 0)} load loop ref={mainMusic} url={music} distance={10000}/>
};

export default MainMusicAudio;
