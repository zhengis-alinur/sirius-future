import styled from '@emotion/styled'
import React from 'react'
import assets from '../constants/assets'

const Item = ({children, className, theme}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const ItemStyled = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-image: url(${props => `/${assets[props.theme].name}/items/${assets[props.theme].items[Math.floor(Math.random()*4)]}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export default ItemStyled;