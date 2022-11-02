import styled from '@emotion/styled';
import { primeblue } from '../../constants/styles';

const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  width: 40px;
  height: 60px;
`
const Round = styled.div`
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: ${primeblue};
  visibility: hidden;
`

const Label = ({id, name, className}) => {
  return(
    <div className={className}>
      <label htmlFor={id}>{id}</label>
      <RadioButton type='radio' name={name} id={id}/>
      <Round className='round'/>
    </div>
  )
}

const LabelStyled = styled(Label)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:end;
  gap: 3px;
  input:checked + .round {
    visibility: visible;
  }
`
export default LabelStyled;