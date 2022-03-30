import type { ButtonProps } from '@mui/material/Button';

import * as S from './styles';

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.PrimaryButton {...props} variant="contained">
      {children}
    </S.PrimaryButton>
  );
};

export default PrimaryButton;
