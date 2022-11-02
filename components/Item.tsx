import styled from '@emotion/styled'
import React from 'react'
import assets from '../constants/assets'

const Item = ({children, className, theme}) => {
  return (
    <div className={className} >
      {children}
    </div>
  )
}

const ItemStyled = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  font-size: 56px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 3px #000000;
  background-image: url(${props => `/${assets[props.theme].name}/items/${assets[props.theme].items[Math.floor(Math.random()*(assets[props.theme].items.length))]}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export default ItemStyled;