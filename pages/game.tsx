import React, { useContext, useEffect, useState } from 'react'
import assets from '../constants/assets'
import DraggableObject from '../components/DraggableObject'
import { GameContext } from '../context'
import styled from '@emotion/styled'
import Panel from '../components/Panel'
import Placer from '../components/Panel/Placer';
const GameField = styled.div`
  display: flex;
`

const Game = ({className}) => {
  const [theme, setTheme] = useState(0);
  const [DraggableObjects, setDraggableObjects] = useState([]);
  const [Placers, setPlacers] = useState([]);

  const gameContext = useContext(GameContext);
  const {amount, ranges, order} = gameContext;
  
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    }
    
  const configureGame = (amount, ranges) => {
    const valueSet = new Set();
    const DraggableObjectsArray = [];
    const PlacersArray = [];

    while(valueSet.size < amount) {
      valueSet.add(Math.floor(Math.random()*ranges));
    }

    Array.from(valueSet).sort((a,b) => order === 'asc' ? a-b : b-a).map((value, index) => {
      const placer = <Placer key={index} id={index} className='placer'/>;
      PlacersArray.push(placer);
      return DraggableObjectsArray.push(<DraggableObject pairedPlacer={placer} id={index} theme={theme} className='item' key={index}>{value}</DraggableObject>)
    })
    setPlacers(PlacersArray);
    setDraggableObjects(shuffleArray(DraggableObjectsArray));
  }

  useEffect(() => {
    const randomThemeId = Math.floor(Math.random() * (assets.length));
    configureGame(amount, ranges);
    return setTheme(randomThemeId);
  }, [])
  
  return (
    <div className={className} style={{backgroundColor: assets[theme].backgroundColor}}>
      <GameField>
        {
          DraggableObjects
        }
      </GameField>
      <p>{order == 'asc' ? 'по возрастанию' : 'по убыванию'}</p>
      <Panel theme={theme} className='panel'>
        {Placers}
      </Panel>
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