import styled from '@emotion/styled';
import LabelStyled from './Label';
import { yellow } from '../constants/styles';
import { useContext } from 'react';
import { GameContext } from '../context/context';

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${yellow};
  max-height: 20px;
  border-radius: 10px;
  margin-bottom: 50px;
`
const Picker = ({title, values, name}) => {
  const gameContext = useContext(GameContext);
  const handleRadio = (e) => {
    if(e.target.name in gameContext) {
      gameContext[e.target.name] = e.target.id;
      console.log(gameContext);

    }
  }
  return(
    <>
      <p>{title}</p>
      <PickerWrapper onClick={handleRadio}>
      {values.map(val => 
        <LabelStyled id={val} key={val} name={name} className='styled_label'/>
        )}
    </PickerWrapper>
    </>
  )
}

export default Picker;