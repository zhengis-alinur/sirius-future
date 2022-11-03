import styled from '@emotion/styled';
import LabelStyled from './Label';
import { yellow } from '../../styles/styles';
import { useContext } from 'react';
import { GameContext } from '../../context';

const RadioPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${yellow};
  max-height: 20px;
  border-radius: 10px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 80%px;
  }
`
const RadioPicker = ({title, values, name}) => {
  const gameContext = useContext(GameContext);
  const handleRadio = (e) => {
    if(e.target.name in gameContext) {
      gameContext[e.target.name] = e.target.id;
    }
  }
  return(
    <>
      <p>{title}</p>
      <RadioPickerWrapper onClick={handleRadio}>
      {values.map(val => 
        <LabelStyled checked={val==gameContext[name]} id={val} key={val} name={name} className='styled_label'/>
        )}
    </RadioPickerWrapper>
    </>
  )
}

export default RadioPicker;