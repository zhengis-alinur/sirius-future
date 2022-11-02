import { createContext } from "react";

export const GameContext = createContext(
  {
    amount: 2,
    ranges: 5,
    order: 'asc',
    gameTheme: 0
  }
);