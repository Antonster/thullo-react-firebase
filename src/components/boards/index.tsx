import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { boardsActionCreator } from 'src/store/actions';

import { Waiter } from 'src/components/common';
import { Header, Card, BoardCreationForm } from './components';
import * as S from './styles';

const Boards: React.FC = () => {
  const dispatch = useAppDispatch();
  const { waiter, boards } = useAppSelector((root) => root.boards);
  const [modal, setModal] = useState(false);

  const onCloseModal = (): void => {
    setModal(false);
  };
  const onOpenModal = (): void => {
    setModal(true);
  };

  useEffect(() => {
    if (!boards) {
      dispatch(boardsActionCreator.getBoards());
    }
  }, [boards, dispatch]);

  return (
    <S.Boards>
      <Header onOpenModal={onOpenModal} />
      <S.CardsContainer>
        {boards &&
          boards.map(({ id, image, title, description }) => (
            <div key={id}>
              <Link to={id}>
                <Card image={image} title={title} description={description} />
              </Link>
            </div>
          ))}
      </S.CardsContainer>
      <BoardCreationForm onCloseModal={onCloseModal} modal={modal} />
      {waiter && <Waiter $size="30px" />}
    </S.Boards>
  );
};

export default Boards;
