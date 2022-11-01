import styled from '@emotion/styled'
import Link from 'next/link';
import Picker from './Picker';
const width = 699;
const height = 660;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  margin: 60px auto;
  text-align: center;
  border-radius: 40px;
  background: linear-gradient(-135deg, #7F75F0, #101F32);
`
const SettingsHolder = styled.div`
  width: ${width-30}px;
  height: ${height-30}px;
  background-color: white;
  border-radius: 30px;
  padding: 73px 80px 10px
`
const amounts = ['2','3','4','5',];
const values = ['A','9','19','50','99','999',];

const Settings = () => {
  return(
    <SettingsWrapper>
    <SettingsHolder>
      <p>Количество предметов</p>
      <Picker values={amounts} name='amounts'/>
      <p>Значения</p>
      <Picker values={values} name='values'/>
      <Link href={'/game'}>Играть</Link>
    </SettingsHolder>
  </SettingsWrapper>
  )
}

export default Settings;