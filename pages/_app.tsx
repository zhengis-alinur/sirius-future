import "../styles/globals.scss";
import { useEffect } from "react";
import { GameContext, initialValues } from "../context";
import useSound from "use-sound";

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
