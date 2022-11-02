import '../styles/globals.scss'
import { GameContext } from "../context/context"

function MyApp({ Component, pageProps }) {
  return (
    <GameContext.Provider value={{amount: 2, ranges: 9,order: 'asc',gameTheme: 0}}>
        <Component {...pageProps} />
    </GameContext.Provider>
  )
}

export default MyApp
