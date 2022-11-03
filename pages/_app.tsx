import '../styles/globals.scss'
import { GameContext, initialValues } from "../context"

function MyApp({ Component, pageProps }) {
  return (
    <GameContext.Provider value={initialValues}>
      <audio
        autoPlay={true}
        src="/audio/background.mp3">
      </audio>
      <Component {...pageProps} />
    </GameContext.Provider>
  )
}

export default MyApp
