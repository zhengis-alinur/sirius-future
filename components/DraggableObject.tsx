import styled from "@emotion/styled";
import React, { ReactNode, useState } from "react";
import assets from "../constants/assets";
import { DragDropContainer } from "react-drag-drop-container";
import useSound from "use-sound";
interface Props {
  id: number;
  children: ReactNode;
  className: string;
  theme: number;
  onDropHandle: Function;
}

const DraggableObject: React.FC<Props> = ({
  id,
  children,
  className,
  theme,
  onDropHandle,
}) => {
  const [noDragging, setNoDragging] = useState(false);
  const [playSuccessSound] = useSound("/audio/success.mp3");

  return (
    <div className='draggable'>
      <DragDropContainer
        targetKey={id}
        noDragging={noDragging}
        onDrop={(e) => {
          setNoDragging(true);
          playSuccessSound();
          onDropHandle();
        }}
      >
        <div className={className}>
          {children}
          <p className='id-holder'>id-{id}</p>
        </div>
      </DragDropContainer>
    </div>
  );
};

const DraggableObjectStyled = styled(DraggableObject)`
  position: relative;
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
  background-image: url(${(props) =>
    `/${assets[props.theme].name}/items/${
      assets[props.theme].items[
        Math.floor(Math.random() * assets[props.theme].items.length)
      ]
    }`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  .id-holder {
    font-size: 12px;
    -webkit-text-stroke: 0px #000000;
  }
  @media (max-width: 800px) {
    font-size: 27px;
    -webkit-text-stroke: 1px #000000;
  }
`;

export default DraggableObjectStyled;
