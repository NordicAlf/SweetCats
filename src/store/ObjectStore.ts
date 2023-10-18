import { Vector3 } from 'three';
import { create } from 'zustand';
import Game from '../utils/constants/Game';
import { getRandomInt } from '../utils/functions/randomNumberGenerator';

const minWorld = Game.minWorldPosition / 2;
const maxWorld = Game.maxWorldPosition / 2;

export type ObjectStoreState = {
  plates: ObjectType[] | null,
  cakes: ObjectType[] | null,
  actions: {
    setPlates: (data: any) => void,
    setCakes: (data: any) => void
  }
}

export type ObjectType = {
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

  // const array: PlateType[] = [];
  //
  // for (let i = 0; i < Game.countPlates; i++) {
  //   array.push(
  //     {
  //       id: 'plate__' + i,
  //       position: [
  //         getRandomInt(minWorld, maxWorld),
  //         getRandomInt(6, maxWorld),
  //         getRandomInt(minWorld, maxWorld)
  //       ]}
  //   )
  // }

  return array;
};

export const useObjectStore = create<ObjectStoreState>((set) => ({
  plates: null,
  cakes: null,
  actions: {
    setPlates: (data: any) => set(() => ({plates: data})),
    setCakes: (data: any) => set(() => ({cakes: data}))
  }
}));

export default useObjectStore;