import styled from 'styled-components';

import type { IStyledMessage } from 'src/interfaces';

export const Auth = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthForm = styled.form`
  margin: 0 0 24px;
`;

export const Title = styled.div`
  width: 100%;
  margin: 0 0 24px;
  text-align: center;
  font-family: 'Noto Sans Display';
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #333333;
`;

export const Footer = styled.div`
  margin: 12px 0 0;
`;

export const Separator = styled.div`
  width: 100%;
  margin: 0 0 12px;
  text-align: center;
  font-family: 'Noto Sans Display';
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Noto Sans Display';
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.035em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Message = styled.div<IStyledMessage>`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.035em;
  color: ${({ $color }) =>
    $color
      ? () => {
          switch ($color) {
            case 'error':
              return '#e96067';
            case 'success':
              return '#219653';
            default:
              return $color;
          }
        }
      : '#333333'};
  margin: 0 0 24px;
`;
