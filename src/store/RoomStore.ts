import { create } from 'zustand';

type State = {
  roomId: string | null,
  roomStatus: string | null,
  roomCreatorUserId: string | null,
  actions: {
    setRoomId: (roomId: string | null) => void,
    setRoomStatus: (status: string | null) => void,
    setRoomCreatorUserId: (userId: string | null) => void
  }
}

const useRoomStore = create<State>((set) => ({
  roomId: null,
  roomStatus: null,
  roomCreatorUserId: null,
  actions: {
    setRoomId: (roomId: string | null) => set(() => ({roomId: roomId})),
    setRoomStatus: (status: string | null) => set(() => ({roomStatus: status})),
    setRoomCreatorUserId: (userId: string | null) => set(() => ({roomCreatorUserId: userId}))
  }
}));

export default useRoomStore;