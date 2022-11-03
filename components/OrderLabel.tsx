import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { GameContext } from '../context'
import Image from 'next/image'

const OrderLabel = ({label, className}) => {
  const gameContext = useContext(GameContext)
  return (
    <div className={className}>
      <Image 
        src={gameContext.order == 'asc' ? '/OrderLabel-r.png' : '/OrderLabel-l.png'} 
        alt={''} 
        width={360} 
        height={70}
        style={{
          left: `${gameContext.order == 'asc' ? '0' : '-100px'}`,
        }}
      />
      <p>{label}</p>
    </div>
  )
}

const OrderLabelStyled = styled(OrderLabel)`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 70px;
  color: white;
  -webkit-text-stroke: 2px #000000;
  p {
    display: inline-block;
  }
  img {
    position: absolute;
  }
  @media (max-width: 800px) {
    img{
      display: none;
    }
  }
`

export default OrderLabelStyled;