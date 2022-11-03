import styled from '@emotion/styled'
import React from 'react'
import assets from '../../constants/assets'
import OrderLabel from '../OrderLabel'

const Panel = ({className, theme, children, order}) => {
  return (
    <div className={className}>
      <OrderLabel className='OrderLabel' label={order=='asc' ? 'По возрастанию' : 'По убыванию'}/>
      <div className='placers_holder'>
        {children}
      </div>
    </div>
    )
  }
  
const PanelStyled = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  .placers_holder {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 890px;
    height: 223px;
    background-image: url(${props => assets[props.theme].name}/panel.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`
export default PanelStyled;