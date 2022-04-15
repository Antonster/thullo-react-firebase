import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import useMediaQuery from '@mui/material/useMediaQuery';

import { thulloImage } from 'src/assets/images';
import { MainButton } from 'src/components/common';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { authActionCreator } from 'src/store/actions';
import * as S from './styles';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const fakeTitle = 'Devchallenges Board';
  const fakeUserName = 'User User';
  const fakeNickname = 'Xanthe Neal';
  const [tooltip, setTooltip] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleTooltipClose = useCallback((): void => {
    setTooltip(false);
  }, []);
  const handleTooltipOpen = useCallback((): void => {
    setTooltip(true);
  }, []);
  const signOut = useCallback(async (): Promise<void> => {
    await dispatch(authActionCreator.signOut());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <S.Header>
      <S.LeftBlock>
        <S.LogoContainer>
          <S.Logo src={thulloImage} alt="Logo" />
          <S.LogoText>Thullo</S.LogoText>
        </S.LogoContainer>
        <S.TitleContainer>
          <MainButton
            type="button"
            $size="small"
            $style="secondary"
            icon={<AppsRoundedIcon sx={{ width: 14 }} />}
            text="All board"
          />
          <S.BoardTitle>{fakeTitle}</S.BoardTitle>
        </S.TitleContainer>
      </S.LeftBlock>
      {login && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <S.MainTooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={tooltip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="bottom-end"
              title={
                <S.TooltipContainer>
                  <S.TooltipItem>
                    <ManageAccountsRoundedIcon sx={{ width: 24 }} />
                    <S.TooltipText>Profile</S.TooltipText>
                  </S.TooltipItem>
                  <Divider />
                  <S.TooltipItem onClick={signOut}>
                    <LogoutRoundedIcon sx={{ width: 24 }} />
                    <S.TooltipText>Sign Out</S.TooltipText>
                  </S.TooltipItem>
                </S.TooltipContainer>
              }
            >
              <S.UserButton type="button" onClick={handleTooltipOpen}>
                <Avatar sx={{ width: 32, height: 32 }} alt={fakeUserName} src="/" />
                {!isMobile && (
                  <>
                    <S.Nickname>{fakeNickname}</S.Nickname>
                    <ArrowDropDownRoundedIcon />
                  </>
                )}
              </S.UserButton>
            </S.MainTooltip>
          </div>
        </ClickAwayListener>
      )}
    </S.Header>
  );
};

export default Header;
