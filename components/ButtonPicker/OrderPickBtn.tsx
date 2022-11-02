import styled from '@emotion/styled';
import { yellow } from '../../constants/styles';

const PickBtn = ({id, label, className, name}) => {
  return(
    <div className={className}>
      <input type="radio" name={name} id={id}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const OrderPickBtn = styled(PickBtn)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  input {
    position: absolute;
    opacity: 0;
  }
  input:checked + label {
    opacity: 1
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 45px;
    background-color: ${yellow};
    opacity: 0.5;
    border-radius: 20px;
  }
`

export default OrderPickBtn;