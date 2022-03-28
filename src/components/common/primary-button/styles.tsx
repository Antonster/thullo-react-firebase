import styled from 'styled-components';
import Button from '@mui/material/Button';

export const PrimaryButton = styled((props) => (
  <Button classes={{ root: props.className }} {...props} />
))`
  &.MuiButton-root {
    text-transform: none;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.035em;
    padding: 8px 16px;
    background-color: #1aa3de;

    &:hover {
      background-color: rgba(26, 163, 222, 0.8);
    }
  }
`;
