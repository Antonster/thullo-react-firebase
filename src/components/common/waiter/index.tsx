import type { IStyledWaiterSquare } from 'src/interfaces';

import * as S from './styles';

const Waiter: React.FC<IStyledWaiterSquare> = ({ $size }) => {
  return (
    <S.Waiter>
      <S.Square $size={$size}>
        <S.SquarePart $part="first" />
        <S.SquarePart $part="second" />
        <S.SquarePart $part="third" />
        <S.SquarePart $part="fourth" />
      </S.Square>
    </S.Waiter>
  );
};

export default Waiter;
