import styled from "@emotion/styled";
import React from "react";
import { DropTarget } from "react-drag-drop-container";

interface Props {
  id: number;
  className: string;
}

const Placer: React.FC<Props> = ({ id, className }) => {
  return (
    <DropTarget id='placer' targetKey={id}>
      <div className={className} />
    </DropTarget>
  );
};

const PlaceStyled = styled(Placer)`
  width: 130px;
  height: 130px;
  background: url(/placer.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default PlaceStyled;
