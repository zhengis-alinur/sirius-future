import styled from '@emotion/styled';
import ButtonPickerButton from './ButtonPickerButton';
import { useContext } from 'react';
import { GameContext } from '../../context';

const ButtonPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

const ButtonPicker = ({values, name}) => {
  const gameContext = useContext(GameContext);
  const handleRadio = (e) => {
    if(e.target.name in gameContext) {
      gameContext[e.target.name] = e.target.id;
    }
  }
  return(
    <ButtonPickerWrapper onClick={handleRadio}>
      {values.map((val, ind)=>{
        return <ButtonPickerButton checked={gameContext.order == val.order} id={val.order} label={val.label} name={name} className='' key={ind}/>
      })}
    </ButtonPickerWrapper>
  )
} 
export default ButtonPicker;