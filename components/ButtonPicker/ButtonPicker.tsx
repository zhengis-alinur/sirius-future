import styled from '@emotion/styled';
import OrderPickBtn from './ButtonPickerButton';
import { useContext } from 'react';
import { GameContext } from '../../context';

const ButtonPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
        return <OrderPickBtn id={val.order} label={val.label} name={name} className='' key={ind}/>
      })}
    </ButtonPickerWrapper>
  )
} 
export default ButtonPicker;