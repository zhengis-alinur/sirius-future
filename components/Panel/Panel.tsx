import styled from '@emotion/styled'
import React from 'react'
import assets from '../../constants/assets'

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
  width: 90%;
  max-width: 890px;
  height: 223px;
  background-image: url(${props => assets[props.theme].name}/panel.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 800px) {
    width: 90%;
  }
`
export default PanelStyled;