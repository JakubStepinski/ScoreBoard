import { createContext, ReactNode, useContext, useState } from "react"
import { createScoreBoardStore } from "./scoreBoardStore";
import { IScoreBoardState } from "./types";
import { StoreApi, useStore } from "zustand";

export interface IScoreBoardStoreProviderProps {
    children: ReactNode;
}

const ScoreBoardStoreContext = createContext<StoreApi<IScoreBoardState> | null>(null);

export const ScoreBoardStoreProvider = ({ children }: IScoreBoardStoreProviderProps) => {
  const [store] = useState<StoreApi<IScoreBoardState>>(() => createScoreBoardStore());

  return (
    <ScoreBoardStoreContext.Provider value={store}>
      {children}
    </ScoreBoardStoreContext.Provider>
  )
}

export const useScoreBoardStore = <T, >(selector: (state: IScoreBoardState) => T) => {
  const store = useContext(ScoreBoardStoreContext);

  if (!store) {
    throw new Error('Missing ScoreBoardStoreProvider');
  }

  return useStore(store, selector);
}