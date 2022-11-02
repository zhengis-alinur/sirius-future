import React, { useContext, useEffect, useState } from 'react'
import assets from '../constants/assets'
import Item from '../components/Item'
import { GameContext } from '../context/context'
import styled from '@emotion/styled'

const GameField = styled.div`
  display: flex;
`

const Game = () => {
  const getRandomArray = (amount, ranges) => {
    const valSet = new Set();
    while(valSet.size < amount) {
      valSet.add(Math.floor(Math.random()*ranges));
    }
    return Array.from(valSet);
  }

  const [theme, setTheme] = useState(0);
  const gameContext = useContext(GameContext);
  const [itemValues, setItemValues] = useState([]);


  useEffect(() => {
    setItemValues(getRandomArray(gameContext.amount, gameContext.ranges))
    return setTheme(Math.floor(Math.random() * (assets.length)))
  }, [])
  return (
    <GameField>
      {itemValues.map((val, ind) => {
        return <Item theme={theme} className='item' key={ind}>{val}</Item>
      })}
    </GameField>
  )
}

export default Game