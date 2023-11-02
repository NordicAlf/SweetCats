import { create } from 'zustand';

type State = {
  isEnableSound: boolean,
  eatCake: boolean,
  mainMusic: boolean,
  actions: {
    enableSound: (enable: boolean) => void,
    playEatCake: (isPlay: boolean) => void,
    playMainMusic: (isPlay: boolean) => void,
  }
}

const useAudioStore = create<State>((set) => ({
  isEnableSound: false,
  eatCake: false,
  mainMusic: false,
  actions: {
    enableSound: (enable: boolean) => set(() => ({isEnableSound: enable})),
    playEatCake: (isPlay: boolean) => set(() => ({eatCake: isPlay})),
    playMainMusic: (isPlay: boolean) => set(() => ({mainMusic: isPlay})),
  }
}));

export default useAudioStore;
