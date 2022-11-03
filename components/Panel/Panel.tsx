import styled from '@emotion/styled'
import { url } from 'inspector'
import React, { useEffect, useState } from 'react'
import assets from '../../constants/assets'
import Placer from './Placer'

const Panel = ({className, theme, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
    )
  }
  
const PanelStyled = styled(Panel)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 890px;
  height: 223px;
  background-image: url(${props => assets[props.theme].name}/panel.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
export default PanelStyled;