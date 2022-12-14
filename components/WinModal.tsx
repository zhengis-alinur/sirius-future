import styled from "@emotion/styled";
import React, { MouseEventHandler } from "react";
import SFButton from "./SFButton";

interface Props {
  className: string;
  reload: MouseEventHandler<HTMLButtonElement>;
}

const WinModalCover = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const WinModal: React.FC<Props> = ({ className, reload }) => {
  return (
    <WinModalCover>
      <div className={className}>
        <p>Молодец! Ты успешно справился с заданием!</p>
        <SFButton style={{ marginTop: 0 }} onClick={reload}>
          Заново
        </SFButton>
      </div>
    </WinModalCover>
  );
};

const WinModalStyled = styled(WinModal)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 80px;
  padding-bottom: 80px;
  position: absolute;
  width: 840px;
  height: 565px;
  background-image: url(/winModal.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  p {
    width: 40%;
  }
  z-index: 1000;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export default WinModalStyled;
