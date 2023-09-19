import { Vector3 } from 'three';
import { create } from 'zustand';
import Game from '../utils/constants/Game';
import { getRandomInt } from '../utils/functions/randomNumberGenerator';

const minWorld = Game.minWorldPosition / 2;
const maxWorld = Game.maxWorldPosition / 2;

type State = {
  plates: PlateType[] | null,
  count: number,
  actions: {
    setPlates: (platesData: any) => void
  }
}

export type PlateType = {
  id: string,
  position: number[]
}

const createPositions = (): Vector3[] => {
  const array: Vector3[] = [];

  for (let i = 0; i < Game.countPlates; i++) {
    array.push(
      new Vector3(
        getRandomInt(minWorld, maxWorld),
        getRandomInt(6, maxWorld),
        getRandomInt(minWorld, maxWorld)
      )
    );
  }

  return array;
};

const usePlateStore = create<State>((set) => ({
  plates: null,
  count: 250,
  actions: {
    setPlates: (platesData: any) => set(() => ({plates: platesData})),
  }
}));

export default usePlateStore;
