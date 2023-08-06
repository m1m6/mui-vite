import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) =>
    props.ismobileup
      ? props.last
        ? "17px"
        : "24px"
      : props.last
      ? "32px"
      : "24px"};
  text-align: left;
  & .MuiInputBase-root {
    width: 100%;
    margin: 0 auto;
    height: 56px;
    background-color: white;
    max-width: ${(props) => (props.ismobileup ? "400px" : "350px")};
    font-family: Roboto;
    border-radius: 39px;
    font-size: 16px;
    line-height: 18px;
    color: #868686;
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: #868686;
      }
    }
    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
        border-color: #868686;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #868686;
      transition: 0.3s ease-out;
    }
    .MuiInputBase-input {
      padding: 18px 12px 19px 12px;
      &::placeholder {
        color: #868686;
        opacity: 1;
      }
    }
  }
`;
export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #757575;
  text-transform: capitalize;
  margin-bottom: 0;
  font-size: 13px;
`;

export const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  & .MuiButtonBase-root {
    padding: 0;
  }
  & .MuiSvgIcon-root {
    width: 22px;
    height: 22px;
    color: #fff;
  }
  & .MuiTouchRipple-root {
    width: 28px;
    height: 28px;
    bottom: auto;
    right: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const CustomLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  color: #000;
  margin-left: 4px;
  cursor: pointer;
  span {
    display: inline-block;
    margin-right: 3px;
  }
  a {
    display: inline-flex;
    align-items: center;
    color: #13a4f1;
    &::after {
      content: "and";
      margin: 0 3px;
      color: #000;
    }
    &:last-child {
      &::after {
        content: unset;
      }
    }
  }
`;
