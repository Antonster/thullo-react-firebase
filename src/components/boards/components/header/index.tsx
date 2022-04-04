import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { MainButton } from 'src/components/common';
import * as S from '../../styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Title>All Boards</S.Title>
      <MainButton
        type="button"
        $style="primary"
        icon={<AddRoundedIcon sx={{ width: '20px' }} />}
        text="Add"
      />
    </S.Header>
  );
};

export default Header;
