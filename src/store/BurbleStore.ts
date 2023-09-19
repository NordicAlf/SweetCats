import { create } from 'zustand';
import Game from '../utils/constants/Game';

const useBurbleStore = create((set) => ({
  burbles: [...Array(Game.countBurbles)],
}));

export default useBurbleStore;
