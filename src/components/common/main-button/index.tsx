import { memo } from 'react';
import type { IMainButton } from 'src/interfaces';

import * as S from './styles';

const MainButton: React.FC<IMainButton> = ({
  onClick,
  type,
  icon,
  text,
  $style,
  $fullWidth,
  $size,
  $gap,
}) => {
  return (
    <S.MainButton onClick={onClick} type={type} $style={$style} $fullWidth={$fullWidth} $gap={$gap}>
      {icon}
      <S.Text $size={$size}>{text}</S.Text>
    </S.MainButton>
  );
};

export default memo(MainButton);
