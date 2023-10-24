import { create } from 'zustand';

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

export const useObjectStore = create<ObjectStoreState>((set) => ({
  plates: null,
  cakes: null,
  actions: {
    setPlates: (data: any) => set(() => ({plates: data})),
    setCakes: (data: any) => set(() => ({cakes: data}))
  }
}));

export default useObjectStore;