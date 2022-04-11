import AddRoundedIcon from '@mui/icons-material/AddRounded';

import type { IBoardsHeader } from 'src/interfaces';
import { MainButton } from 'src/components/common';
import * as S from '../../styles';

const Header: React.FC<IBoardsHeader> = ({ onOpenModal }) => {
  return (
    <S.Header>
      <S.Title>All Boards</S.Title>
      <MainButton
        type="button"
        $style="primary"
        icon={<AddRoundedIcon sx={{ width: '20px' }} />}
        text="Add"
        onClick={onOpenModal}
      />
    </S.Header>
  );
};

export default Header;
