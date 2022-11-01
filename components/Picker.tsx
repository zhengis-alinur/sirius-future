import styled from '@emotion/styled';

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFD748;
  max-height: 20px;
  margin-bottom: 50px;
`
const RadioButton = styled.input`
  &::after{
    position: relative;
    display: block;
    top: -6px;
    left: -4px;
    content:'';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #104987;
    visibility: hidden;
  }
  &:checked::after {
    visibility: visible;
  }
`

const Label = ({id, name, className}) => {
  return(
    <div className={className}>
      <label htmlFor={id}>{id}</label>
      <RadioButton type='radio' name={name} id={id}/>
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
`

const Picker = ({values, name}) => {
  return(
    <PickerWrapper>
      {values.map(val => 
        <LabelStyled id={val} key={val} name={name} className='styled_label'/>
        )}
    </PickerWrapper>
  )
}

export default Picker;