import { create } from 'zustand';

type State = {
  positions: Pos[] | null
  actions: {
    setPositions: (positions: any) => void
  }
}

type Pos = {
  id: string,
  position: number[]
}

const usePlayerStore = create<State>((set) => ({
  positions: null,
  actions: {
    setPositions: (positions: any) => set(() => ({positions: positions})),

  }
}));

export default usePlayerStore;