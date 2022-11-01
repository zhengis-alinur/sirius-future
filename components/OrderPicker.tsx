import styled from '@emotion/styled';
import OrderPickBtn from './OrderPickBtn';

const orders = [{value: 'asc', label: 'По возрастанию'}, {value: 'desc', label: 'По убыванию'}];

const OrderPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const OrderPicker = () => {
  return(
    <OrderPickerWrapper>
      <OrderPickBtn id={'asc'} label={'По возрастанию'} className='' key={1}/>
      <OrderPickBtn id={'desc'} label={'По убыванию'} className='' key={2}/>
    </OrderPickerWrapper>
  )
} 
export default OrderPicker;