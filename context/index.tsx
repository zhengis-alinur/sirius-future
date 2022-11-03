import { createContext } from "react";

export const initialValues = {
  amount: 2,
  ranges: 'A',
  order: 'asc',
}

export const GameContext = createContext(initialValues);