import React from "react";
import styled from "styled-components";
import { Color } from "../../../theme/colors";
type InputProp = {
  placeholder: string;
  type: string;
  name: string;
  value: string | number;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  error?: boolean;
};
const InputField = (props: InputProp) => {
  const { placeholder, type, onChange, onBlur, value, name, error } = props;
  return (
    <CustomInputBox>
      {type == "textarea" ? (
        <CustomTextArea {...props} rows={5} >
          {/* {placeholder} */}
        </CustomTextArea>
      ) : (
        <CustomInput {...props} error={error} autoComplete={"off"} />
      )}
      <span></span>
    </CustomInputBox>
  );
};

export default InputField;

const CustomInputBox = styled.div`
  position: relative;
`;

const CustomInput = styled.input<{ error?: boolean }>`
  background-color: ${Color.grey + 10};
  border: none;
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  color: #8d8d8d;
  font-size: 1.2rem;
  position: relative;
  & + span {
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background-color: ${Color.primary};
    transition: width 200ms ease-in-out;
    ${(props) => props.error && `background-color: ${Color.rose}; width : 100%`}
  }
  &:focus {
    outline: none;

    & + span {
      width: 100%;
    }
  }
`;

const CustomTextArea = styled.textarea<{ error?: boolean }>`
  background-color: ${Color.grey + 10};
  border: none;
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  color: #8d8d8d;
  font-size: 1.2rem;
  position: relative;
  resize: vertical;

  & + span {
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background-color: ${Color.primary};
    transition: width 200ms ease-in-out;
    ${(props) => props.error && `background-color: ${Color.rose}; width : 100%`}
  }
  &:focus {
    outline: none;

    & + span {
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
