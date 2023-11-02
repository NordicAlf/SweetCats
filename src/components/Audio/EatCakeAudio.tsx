import React, {useEffect, useRef} from "react";
import { Audio} from "three";
import {PositionalAudio} from "@react-three/drei";
import eat from '~/assets/audio/eat.mp3?url';
import useAudioStore from "~/store/AudioStore";

const EatCakeAudio: React.FC = () => {
  const cakeSound = useRef<Audio>(null!);
  const eatCakeSound = useAudioStore((state) => (state.eatCake));
  const playEatCakeSound = useAudioStore((state) => (state.actions.playEatCake));

  useEffect(() => {
    if (eatCakeSound) {
      cakeSound.current.play();
      playEatCakeSound(false);
    }
  }, [eatCakeSound])

  return <PositionalAudio load ref={cakeSound} url={eat} distance={10} loop={false}/>
};

export default EatCakeAudio;
