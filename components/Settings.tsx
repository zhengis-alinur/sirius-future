import styled from '@emotion/styled'
import Link from 'next/link';
import Picker from './RadioPicker';
import ButtonPicker from './ButtonPicker';
import SFButton from './SFButton';
import { darkblue, lightblue } from '../styles/styles';
import { amount, ranges, orders} from '../constants/configs';

const width = 700;
const height = 660;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  margin: 30px auto 30px;
  text-align: center;
  border-radius: 40px;
  background: linear-gradient(-135deg, ${lightblue}, ${darkblue});
  @media (max-width: 800px) {
    width: 90%;
  }
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
  padding: 20px 80px 30px;
  @media (max-width: 800px) {
    width: 90%;
  }
`

const Settings = () => {
  return(
  <SettingsWrapper>
    <SettingsHolder>
      <Picker title='Кол-во предметов' values={amount} name='amount'/>
      <Picker title='Значения' values={ranges} name='ranges'/>
      <ButtonPicker values={orders} name='order'/>
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