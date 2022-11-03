import styled from '@emotion/styled'
import React, {ReactDOM} from 'react'
import assets from '../constants/assets'
import Draggable from 'react-draggable'

const DraggableObject = ({id, children, className, theme, pairedPlacer}) => {
  const dragHandler = (e, position) => {
  }
  return (
    <Draggable>
      <div className={className}>
        {children}
        <p className='id-holder'>id-{id}</p>
      </div>
    </Draggable>
  )
}

const DraggableObjectStyled = styled(DraggableObject)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  font-size: 56px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  -webkit-text-stroke: 3px #000000;
  background-image: url(${props => `/${assets[props.theme].name}/items/${assets[props.theme].items[Math.floor(Math.random()*(assets[props.theme].items.length))]}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  .id-holder {
    font-size: 12px;
    -webkit-text-stroke: 0px #000000;
  }
`

export default DraggableObjectStyled;