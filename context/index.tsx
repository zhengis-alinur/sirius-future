import { createContext } from "react";

export const initialValues = {
  amount: 2,
  ranges: 'A',
  order: 'asc',
  matches: 0,
}

export const GameContext = createContext(initialValues);