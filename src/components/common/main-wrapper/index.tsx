import type { IMainWrapper } from 'src/interfaces';

import * as S from './styles';

const MainWrapper: React.FC<IMainWrapper> = ({ children, width, height, padding }) => {
  return (
    <S.MainWrapper $width={width} $height={height} $padding={padding}>
      {children}
    </S.MainWrapper>
  );
};

export default MainWrapper;
