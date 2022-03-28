import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const MainTextField = styled((props) => (
  <TextField classes={{ root: props.className }} {...props} />
))`
  &.MuiFormControl-root {
    margin: 0 0 24px;
  }

  & .MuiInputLabel-root {
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.045em;
    color: #bdbdbd;
  }

  & .MuiInputBase-input {
    font-family: 'Noto Sans Display';
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
  }

  & .Mui-error .MuiOutlinedInput-notchedOutline {
    box-shadow: 0px 2px 6px rgba(211, 47, 47, 0.25);
  }

  & fieldset {
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.4s;
  }

  & .MuiFormHelperText-root {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.035em;
  }
`;
