import { create } from "zustand";

type State = {
  messages: Message[],
  actions: {
    addMessage: (type: string, text: string) => void,
    clear: () => void
  }
}

type Message = {
  id: number,
  type: string,
  text: string
}

const useFlashMessageStore = create<State>((set) => ({
  messages: [],
  actions: {
    addMessage: (type: string, text: string) =>
      set((state: any) => ({
        messages: [...state.messages, {
              id: 10,
              type: type,
              text: text}
        ],
      })),
    clear: () => set(() => ({messages: []}))
  }
}));

export default useFlashMessageStore;
