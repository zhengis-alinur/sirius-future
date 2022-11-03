import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import Settings from "../components/Settings"

const HomeWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(/background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default function Home() {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('/audio/background-audio.mp3'));
  }, [])
  return (
    <HomeWrapper className="home">
      <Settings/>
    </HomeWrapper>
  )
}
