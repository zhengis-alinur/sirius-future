import styled from "@emotion/styled";
import ButtonPickerButton from "./ButtonPickerButton";
import { useContext } from "react";
import { GameContext } from "../../context";

const ButtonPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const ButtonPicker = ({ values, name }) => {
  const gameContext = useContext(GameContext);
  const handleRadio = (e) => {
    if (e.target.name in gameContext) {
      gameContext[e.target.name] = e.target.id;
    }
  };
  return (
    <ButtonPickerWrapper onClick={handleRadio}>
      {values.map((value, index) => {
        return (
          <ButtonPickerButton
            checked={gameContext.order == value.order}
            id={value.order}
            label={value.label}
            name={name}
            className=''
            key={index}
          />
        );
      })}
    </ButtonPickerWrapper>
  );
};
export default ButtonPicker;
