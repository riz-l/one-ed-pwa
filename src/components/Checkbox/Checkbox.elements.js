// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ under }) => (under ? "column" : "row")};
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;

// Element: Label
export const Label = styled.label``;

// Element: InputCheckbox
export const InputCheckbox = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;
`;

// Element: Text
export const Text = styled.label`
  margin-left: ${({ under }) => (under ? "0" : "0.8rem")};
  margin-top: ${({ under }) => (under ? "0.4rem" : "0")};
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#008ba3" : "#d4d4d8")};
  border-radius: 50%;
  content: "";
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  transition: all 100ms linear;
  width: 50px;

  & svg {
    fill: ${({ checked }) => (checked ? "#f1f1f1" : "#3a3a40")};
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }

  &:hover {
    background: ${({ checked }) => (checked ? "#00687a" : "#bfbfc5")};
    transition: all 100ms linear;

    & svg {
      fill: ${({ checked }) => (checked ? "#ffffff" : "#2a2a2e")};
      transition: all 100ms linear;
    }
  }
`;
