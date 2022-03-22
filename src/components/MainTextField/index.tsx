import type { TextFieldProps } from '@mui/material/TextField';

import * as S from './styles';

const MainTextField: React.FC<TextFieldProps> = (props) => {
  return <S.MainTextField {...props} />;
};

export default MainTextField;
