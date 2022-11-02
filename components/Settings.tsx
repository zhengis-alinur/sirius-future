import styled from '@emotion/styled'
import Link from 'next/link';
import Picker from './RadioPicker/Picker';
import OrderPicker from './ButtonPicker/OrderPicker';
import SFButton from './SFButton';
import { darkblue, lightblue } from '../constants/styles';

const width = 699;
const height = 660;

const amount = ['2','3','4','5',];
const ranges = ['A','9','19','50','99','999',];
const orders = [{order: 'asc', label: 'По возрастанию'}, {order: 'desc', label: 'По убыванию'}];

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  margin: 30px auto;
  text-align: center;
  border-radius: 40px;
  background: linear-gradient(-135deg, ${lightblue}, ${darkblue});
`
const SettingsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${width-30}px;
  height: ${height-30}px;
  background-color: white;
  border-radius: 30px;
  padding: 20px 80px 30px
`

const Settings = () => {
  return(
  <SettingsWrapper>
    <SettingsHolder>
      <Picker title='Кол-во предметов' values={amount} name='amount'/>
      <Picker title='Значения' values={ranges} name='ranges'/>
      <OrderPicker values={orders} name='order'/>
      <Link href={'/game'}>
        <SFButton >
          Играть
        </SFButton>
      </Link>
    </SettingsHolder>
  </SettingsWrapper>
  )
}

export default Settings;