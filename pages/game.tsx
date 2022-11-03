import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import assets from "../constants/assets";
import DraggableObject from "../components/DraggableObject";
import { GameContext } from "../context";
import Panel from "../components/Panel";
import Placer from "../components/Panel/Placer";
import { letters } from "../constants/configs";
import WinModalStyled from "../components/WinModal";

const GameField = styled.div`
  display: flex;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

interface Props {
  className: string;
}

const Game: React.FC<Props> = ({ className }) => {
  const [theme, setTheme] = useState(0);
  const [DraggableObjects, setDraggableObjects] = useState([]);
  const [Placers, setPlacers] = useState([]);
  const [win, setWin] = useState(false);

  const gameContext = useContext(GameContext);
  const { amount, ranges, order } = gameContext;

  const onDraggableDropHandler = () => {
    gameContext.matches++;
    if (gameContext.matches == amount) {
      setWin(true);
    }
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const configureGame = (amount, ranges) => {
    const valueSet = new Set();
    let sortedSet = [];
    const DraggableObjectsArray = [];
    const PlacersArray = [];

    if (ranges === "A") {
      while (valueSet.size < amount) {
        valueSet.add(letters[Math.floor(Math.random() * letters.length)]);
      }
      sortedSet = Array.from(valueSet).sort(
        (a, b) => String(a).charCodeAt(0) - String(b).charCodeAt(0)
      );
    }

    while (valueSet.size < amount) {
      valueSet.add(Math.floor(Math.random() * ranges));
    }

    sortedSet = Array.from(valueSet).sort((a, b) => a - b);

    sortedSet.map((value, index) => {
      const placer = <Placer key={index} id={index} className='placer' />;
      PlacersArray.push(placer);
      return DraggableObjectsArray.push(
        <DraggableObject
          id={index}
          theme={theme}
          className='item'
          key={index}
          onDropHandle={onDraggableDropHandler}
        >
          {value}
        </DraggableObject>
      );
    });
    setPlacers(PlacersArray);
    setDraggableObjects(shuffleArray(DraggableObjectsArray));
  };

  const reloadGame = () => {
    location.replace("/");
    setWin(false);
  };

  useEffect(() => {
    const randomThemeId = Math.floor(Math.random() * assets.length);
    configureGame(amount, ranges);
    return setTheme(randomThemeId);
  }, [theme]);

  return (
    <div
      className={className}
      style={{
        backgroundColor: assets[theme].backgroundColor,
        backgroundImage: `url(/${assets[theme].name}/bg.png)`,
      }}
    >
      <GameField>{DraggableObjects}</GameField>
      <Panel theme={theme} order={order} className='panel'>
        {Placers}
      </Panel>
      {win ? <WinModalStyled reload={reloadGame} className='winModal' /> : ""}
    </div>
  );
};

const GameStyled = styled(Game)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default GameStyled;
