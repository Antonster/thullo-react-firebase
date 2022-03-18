import type { IMainButton } from 'src/interfaces';

import * as S from './styles';

const MainButton: React.FC<IMainButton> = ({ icon, text }) => {
  return (
    <S.MainButton type="button">
      {icon}
      <S.MainText>{text}</S.MainText>
    </S.MainButton>
  );
};

export default MainButton;
