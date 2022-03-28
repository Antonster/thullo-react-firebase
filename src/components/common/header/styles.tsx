import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

export const Header = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 24px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 786px) {
    align-items: flex-start;
    height: 100px;
    padding: 12px;
  }

  @media (max-width: 320px) {
    height: 130px;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 90px 0 0;

  @media (max-width: 1024px) {
    margin: 0 36px 0 0;
  }

  @media (max-width: 786px) {
    margin: 0 0 12px;
  }
`;

export const Logo = styled.img`
  width: 28px;
  margin: 0 12px 0 0;
`;

export const LogoText = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #333333;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 320px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BoardTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #333333;
  padding: 0 0 0 24px;
  margin: 0 0 0 24px;
  border-left: 1px solid #e0e0e0;
  max-width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    max-width: 350px;
  }

  @media (max-width: 786px) {
    max-width: 200px;
    font-size: 14px;
    line-height: 18px;
    padding: 0 0 0 6px;
    margin: 0 0 0 6px;
  }

  @media (max-width: 320px) {
    padding: 0 0 0 6px;
    margin: 12px 0 0;
  }
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333333;
  transition: all 0.4s;

  &:hover {
    color: #1aa3de;
  }
`;

export const Nickname = styled.div`
  margin: 0 0 0 10px;
  font-family: 'Noto Sans Display';
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
`;

export const TooltipContainer = styled.div`
  width: 150px;
`;

export const TooltipItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: #1aa3de;
  }
`;

export const TooltipText = styled.div`
  margin: 0 0 0 8px;
  font-family: 'Noto Sans Display';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
`;

export const MainTooltip = styled((props) => (
  <Tooltip classes={{ popper: props.className }} {...props} />
))`
  & .MuiTooltip-tooltip {
    background-color: #ffffff;
    color: #333333;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
`;
