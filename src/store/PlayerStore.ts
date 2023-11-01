import { create } from 'zustand';

type State = {
  ownerPlayerId: string | null,
  users: User[] | null,
  cakeCount: number,
  userPositions: {
    [id: string]: {
      'position': UserVector,
      'rotation': UserVector,
    }
  }
  actions: {
    setOwnerPlayerId: (userId: string | null) => void,
    setUsers: (users: any) => void,
    setUserPositions: (users: any) => void,
    eatCake: () => void
  }
}

type User = {
  id: string
}

type UserVector = {
  x: number,
  y: number,
  z: number
}

const usePlayerStore = create<State>((set) => ({
  ownerPlayerId: null,
  users: null,
  cakeCount: 0,
  userPositions: {},
  actions: {
    setOwnerPlayerId: (userId: string | null) => set(() => ({ownerPlayerId: userId})),
    setUsers: (users: any) => set(() => ({users: users})),
    setUserPositions: (users: any) => set(() => ({userPositions: users})),
    eatCake: () => set((state) => ({cakeCount: state.cakeCount + 1})),
  }
}));

export default usePlayerStore;
