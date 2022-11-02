import React, { useState } from 'react'
import assets from '../constants/assets'
import { useContext } from 'react'
import Image from 'next/image'
import { GameContext } from '../context/context'

const Game = () => {
  const theme = useContext(GameContext).gameTheme;
  return (
    <div>
      {assets[theme].theme}
    </div>
  )
}

export default Game