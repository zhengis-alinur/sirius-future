import styled from '@emotion/styled';
import LabelStyled from './Label';

const PickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFD748;
  max-height: 20px;
  border-radius: 10px;
  margin-bottom: 50px;
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