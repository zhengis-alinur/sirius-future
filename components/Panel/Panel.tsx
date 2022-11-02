import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import assets from '../../constants/assets'
import Placer from './Placer'

const Panel = ({className, theme, amount}) => {
  const [placers, setPlacers] = useState([]);
  useEffect(() => {
    const plArr = [];
    for(let i = 0; i < amount; i++) {
      plArr.push(<Placer/>);
    }
    setPlacers(plArr);
  }, [])
  return (
    <div className={className}>
      {
        placers
      }
    </div>
    )
  }
  
const PanelStyled = styled(Panel)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 890px;
  height: 223px;
  background-image: url(/${props => assets[props.theme].name}/panel.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
export default PanelStyled;