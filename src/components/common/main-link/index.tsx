import type { LinkProps } from 'react-router-dom';

import * as S from './styles';

const MainLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <S.MainLink to={to} {...props}>
      {children}
    </S.MainLink>
  );
};

export default MainLink;
