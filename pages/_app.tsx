import '../styles/globals.scss'
import { GameContext, initialValues } from "../context/context"

function MyApp({ Component, pageProps }) {
  return (
    <GameContext.Provider value={initialValues}>
          <Component {...pageProps} />
    </GameContext.Provider>
  )
}

export default MyApp
