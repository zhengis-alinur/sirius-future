import styled from '@emotion/styled'
import React from 'react'
import {DropTarget} from 'react-drag-drop-container';

const Placer = ({id, className}) => {
  return (
    <DropTarget
          id="my_target"
          targetKey={id}
        >
      <div className={className}>{id}</div>
    </DropTarget>
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