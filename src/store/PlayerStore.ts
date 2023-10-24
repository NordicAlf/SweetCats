import { create } from 'zustand';

type State = {
  ownerPlayerId: string | null,
  users: User[] | null,
  userPositions: {
    [id: string]: UserPosition
  }
  actions: {
    setOwnerPlayerId: (userId: string | null) => void,
    setUsers: (users: any) => void,
    setUserPositions: (users: any) => void,
  }
}

type User = {
  id: string
}

type UserPosition = {
  x: number,
  y: number,
  z: number
}

const usePlayerStore = create<State>((set) => ({
  ownerPlayerId: null,
  users: null,
  userPositions: {},
  actions: {
    setOwnerPlayerId: (userId: string | null) => set(() => ({ownerPlayerId: userId})),
    setUsers: (users: any) => set(() => ({users: users})),
    setUserPositions: (users: any) => set(() => ({userPositions: users})),
  }
}));

export default usePlayerStore;