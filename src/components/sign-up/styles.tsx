import styled from 'styled-components';

export const SignUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpForm = styled.form`
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
