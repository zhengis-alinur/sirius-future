import styled from "@emotion/styled";
import { green } from "../styles/styles";

const SFButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 60px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${green};
  border-radius: 20px;
  margin-top: 100px;
  &:hover {
    opacity: 0.9;
  }
`;
export default SFButton;
