import styled from '@emotion/styled';
import OrderPickBtn from './OrderPickBtn';
import { useContext } from 'react';
import { GameContext } from '../../context/context';

const OrderPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const OrderPicker = ({values, name}) => {
  const gameContext = useContext(GameContext);
  const handleRadio = (e) => {
    if(e.target.name in gameContext) {
      gameContext[e.target.name] = e.target.id;
    }
  }
  return(
    <OrderPickerWrapper onClick={handleRadio}>
      {values.map((val, ind)=>{
        return <OrderPickBtn id={val.order} label={val.label} name={name} className='' key={ind}/>
      })}
    </OrderPickerWrapper>
  )
} 
export default OrderPicker;