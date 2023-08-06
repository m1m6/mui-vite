import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import {
  CustomCheckbox,
  CustomLabel,
  ErrorMessage,
  InputContainer,
} from "./Input.styled";

const Input = (props) => {
  const {
    label,
    placeholder,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value,
    showPassword,
    margin,
    formData,
    last,
    required,
  } = props;

  const theme = useTheme();
  const ismobileup = useMediaQuery(theme.breakpoints.up("md"));

  const [passwordVisible, setPasswordVisible] = useState(showPassword);

  const handlePasswordChange = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <InputContainer last={last} margin={margin} ismobileup={ismobileup ? 1 : 0}>
      {type === "text" && (
        <TextField
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type={type}
          name={name}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      {type === "email" && (
        <TextField
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type="email"
          name={name}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      {type === "password" && (
        <TextField
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type={passwordVisible ? "text" : type}
          name={name}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordChange}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color: "#fff" }}
              >
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      )}
      {type === "checkbox" && (
        <CustomCheckbox>
          <Checkbox
            id={name}
            name={name}
            checked={value}
            onChange={(e) =>
              handleChange({ target: { name: name, value: e.target.checked } })
            }
            inputProps={{ "aria-label": "controlled" }}
          />
          <CustomLabel>
            <span>{label.text}</span>
            {label.links &&
              label.links.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.text}
                </a>
              ))}
          </CustomLabel>
        </CustomCheckbox>
      )}
      {errorMessage && name in formData && isValid(formData[name]) && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </InputContainer>
  );
};

export default Input;
