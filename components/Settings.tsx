import styled from '@emotion/styled'
import Link from 'next/link';
import Picker from './Picker';
import OrderPicker from './OrderPicker';
import SFButton from './SFButton';
import { darkblue, lightblue } from '../constants/styles';
import { GameContext } from "../context/context"
import { useContext } from 'react';
import assets from '../constants/assets';

const width = 699;
const height = 660;

const amount = ['2','3','4','5',];
const ranges = ['A','9','19','50','99','999',];
const orders = [{order: 'asc', label: 'По возрастанию'}, {order: 'desc', label: 'По убыванию'}];

//cюда же ордерпикер
const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  margin: 60px auto;
  text-align: center;
  border-radius: 40px;
  background: linear-gradient(-135deg, ${lightblue}, ${darkblue});
`
const SettingsHolder = styled.div`
  width: ${width-30}px;
  height: ${height-30}px;
  background-color: white;
  border-radius: 30px;
  padding: 73px 80px 10px
`

const Settings = () => {
  const gameContext = useContext(GameContext);
  const configureGame = () => {
    gameContext.gameTheme = Math.floor(Math.random()*(assets.length+1));
  }
  return(
  <SettingsWrapper>
    <SettingsHolder>
      <Picker title='Количество предметов' values={amount} name='amount'/>
      <Picker title='Значения' values={ranges} name='ranges'/>
      <OrderPicker values={orders} name='order'/>
      <Link href={'/game'}>
        <SFButton onClick={configureGame}>
          Играть
        </SFButton>
      </Link>
    </SettingsHolder>
  </SettingsWrapper>
  )
}

export default Settings;