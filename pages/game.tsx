import React, { useContext, useEffect, useState } from 'react'
import assets from '../constants/assets'
import Item from '../components/Item'
import { GameContext } from '../context'
import styled from '@emotion/styled'
import Panel from '../components/Panel'

const GameField = styled.div`
  display: flex;
`

const Game = ({className}) => {
  const [theme, setTheme] = useState(0);
  const [itemValues, setItemValues] = useState([]);

  const gameContext = useContext(GameContext);
  const {amount, ranges} = gameContext;
  
  const getRandomArray = (amount, ranges) => {
    const valueSet = new Set();
    while(valueSet.size < amount) {
      valueSet.add(Math.floor(Math.random()*ranges));
    }
    return Array.from(valueSet);
  }
  
  useEffect(() => {
    const randomThemeId = Math.floor(Math.random() * (assets.length));
    setItemValues(getRandomArray(amount, ranges))
    setTheme(randomThemeId);
  }, [])
  
  return (
    <div className={className} style={{backgroundColor: assets[theme].backgroundColor}}>
      <GameField>
        {itemValues.map((value, index) => {
          return <Item theme={theme} className='item' key={index}>{value}</Item>
        })}
      </GameField>
      <Panel theme={theme} amount={amount} className='panel'/>
    </div>
  )
}

const GameStyled = styled(Game)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 20px;
`

export default GameStyled