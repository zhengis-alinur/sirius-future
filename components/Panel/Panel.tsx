import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import assets from "../../constants/assets";
import OrderArrow from "../OrderArrow";

interface Props {
  className: string;
  theme: number;
  children: ReactNode;
  order: string;
}

const Panel: React.FC<Props> = ({ className, theme, children, order }) => {
  return (
    <div className={className}>
      <OrderArrow
        className='OrderLabel'
        label={order == "asc" ? "По возрастанию" : "По убыванию"}
      />
      <div className='placers-holder'>{children}</div>
    </div>
  );
};

const PanelStyled = styled(Panel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  .placers-holder {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 890px;
    height: 223px;
    background-image: url(${(props) => assets[props.theme].name}/panel.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
export default PanelStyled;
