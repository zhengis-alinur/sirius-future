import "../styles/globals.scss";
import { ReactNode, useEffect } from "react";
import { GameContext, initialValues } from "../context";
import useSound from "use-sound";

interface Props {
  Component: ReactNode;
  pageProps: ReactNode[];
}

function MyApp({ Component, pageProps }) {
  // const [playBackgroundSound] = useSound('/audio/background.mp3');

  // useEffect(() => {
  //   playBackgroundSound();
  // },[]);

  return (
    <GameContext.Provider value={initialValues}>
      <Component {...pageProps} />
    </GameContext.Provider>
  );
}

export default MyApp;
