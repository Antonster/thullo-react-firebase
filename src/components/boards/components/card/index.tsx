import type { IBoardsCard } from 'src/interfaces';

import * as S from '../../styles';

const Card: React.FC<IBoardsCard> = ({ image, title, description }) => {
  return (
    <S.Card>
      {image ? <S.CardImage src={image} alt={title} /> : <S.EmptyCardImage />}
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardDescription>{description}</S.CardDescription>
    </S.Card>
  );
};

export default Card;
