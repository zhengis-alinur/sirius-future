import styled from "@emotion/styled";
import { useContext } from "react";
import { primeblue } from "../../styles/styles";
import { GameContext } from "../../context";

const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  width: 80px;
  height: 60px;
  @media (max-width: 800px) {
    width: 40px;
  }
`;
const Round = styled.div`
  position: absolute;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: ${primeblue};
  visibility: hidden;
`;

const Label = ({ id, name, className, checked }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{id}</label>
      <RadioButton type='radio' name={name} id={id} defaultChecked={checked} />
      <Round className='round' />
    </div>
  );
};

const LabelStyled = styled(Label)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 3px;
  font-size: 24px;
  input:checked + .round {
    visibility: visible;
  }
`;
export default LabelStyled;
