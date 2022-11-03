import styled from '@emotion/styled'
import React from 'react'

const Placer = ({id, className}) => {
  return (
    <div className={className}>id-{id}</div>
  )
}

const PlaceStyled = styled(Placer)`
  width: 130px;
  height: 130px;
  background: url(/placer.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
export default PlaceStyled;