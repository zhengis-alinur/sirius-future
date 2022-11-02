import { createContext } from "react";

export const initialValues = {
  amount: 5,
  ranges: 19,
  order: 'asc',
}

export const GameContext = createContext(initialValues);