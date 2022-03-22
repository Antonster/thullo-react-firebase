import type { ISecondaryButton } from 'src/interfaces';

import * as S from './styles';

const SecondaryButton: React.FC<ISecondaryButton> = ({ icon, text }) => {
  return (
    <S.SecondaryButton type="button">
      {icon}
      <S.MainText>{text}</S.MainText>
    </S.SecondaryButton>
  );
};

export default SecondaryButton;
