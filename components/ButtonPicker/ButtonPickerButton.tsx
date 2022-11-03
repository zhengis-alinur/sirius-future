import styled from '@emotion/styled';
import { yellow } from '../../styles/styles';

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
    font-size: 32px;
    font-weight: bold;
    background-color: ${yellow};
    border-radius: 20px;
    opacity: 0.5;
    @media (max-width: 800px) {
      width: 120px;
      font-size: 16px;
    }
  }
`

export default OrderPickBtn;