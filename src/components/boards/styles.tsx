import styled from 'styled-components';
import { MainWrapper } from 'src/components/common';

export const Boards = styled.div`
  padding: 60px 12px;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    padding: 30px 12px;
    width: 480px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 36px;
`;

export const Title = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #333333;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(MainWrapper)`
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 130px;
  margin: 0 0 12px;
  border-radius: 12px;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-family: 'Noto Sans Display';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #333333;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDescription = styled.div`
  font-family: 'Noto Sans Display';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
  color: #828282;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;