import type { IMainButton } from 'src/interfaces';

import * as S from './styles';

const MainButton: React.FC<IMainButton> = ({ type, icon, text, $style, $fullWidth, $size }) => {
  return (
    <S.MainButton type={type} $style={$style} $fullWidth={$fullWidth}>
      {icon}
      <S.Text $size={$size}>{text}</S.Text>
    </S.MainButton>
  );
};

export default MainButton;
