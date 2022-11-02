import { createContext } from "react";

export const initialValues = {
  amount: 5,
  ranges: 10,
  order: 'asc',
  gameTheme: 0
}

export const GameContext = createContext(initialValues);

export const ThemeContext = createContext(
  {
    theme: 0,
    setTheme: () => {}
  }
);
