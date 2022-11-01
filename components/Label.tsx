import styled from '@emotion/styled';

const RadioButton = styled.input`
  opacity: 0;
`
const Round = styled.div`
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: #104987;
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