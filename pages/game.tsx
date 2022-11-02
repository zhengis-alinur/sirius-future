import React, { useContext, useEffect, useState } from 'react'
import assets from '../constants/assets'
import Item from '../components/Item'
import { GameContext } from '../context/context'
import styled from '@emotion/styled'
import PanelStyled from '../components/Panel/Panel'

const GameField = styled.div`
  display: flex;
`

const Game = () => {
  const [theme, setTheme] = useState(0);
  const [itemValues, setItemValues] = useState([]);

  const gameContext = useContext(GameContext);
  const {amount, ranges} = gameContext;
  
  const getRandomArray = (amount, ranges) => {
    const valSet = new Set();
    while(valSet.size < amount) {
      valSet.add(Math.floor(Math.random()*ranges));
    }
    return Array.from(valSet);
  }
  
  useEffect(() => {
    setItemValues(getRandomArray(amount, ranges))
    return setTheme(Math.floor(Math.random() * (assets.length)))
  }, [])
  
  return (
    <>
      <GameField>
        {itemValues.map((val, ind) => {
          return <Item theme={theme} className='item' key={ind}>{val}</Item>
        })}
      </GameField>
      <PanelStyled theme={theme} amount={amount} className='panel'/>
    </>
  )
}

export default Game