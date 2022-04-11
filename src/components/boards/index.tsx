import { useState } from 'react';
import { Link } from 'react-router-dom';

import { testImage1, testImage2, testImage3, testImage4 } from 'src/assets/images';
import { Header, Card, BoardCreationForm } from './components';

import * as S from './styles';

const fakeCards = [
  { id: '1', image: testImage1, title: 'Devchallenges Board', description: 'Devchallenges Board' },
  { id: '2', image: testImage2, title: 'Simple Project Board' },
  {
    id: '3',
    image: testImage3,
    title: 'Kanban Template Devchallenges Board Devchallenges Board',
    description: 'Devchallenges Board Devchallenges Board Devchallenges Board',
  },
  {
    id: '4',
    image: '',
    title: 'Habit Building Board',
    description: 'Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board',
  },
  {
    id: '5',
    image: testImage4,
    title: 'Devchallenges Board 2',
    description:
      'Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board Devchallenges Board',
  },
];

const Boards: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [boardList, setBoardList] = useState(fakeCards);

  const onCloseModal = (): void => {
    setModal(false);
  };

  const onOpenModal = (): void => {
    setModal(true);
  };

  const addBoard = (image: string, title: string, description: string): void => {
    setBoardList((state) => [...state, { id: `${state.length + 1}`, image, title, description }]);
  };

  return (
    <S.Boards>
      <Header onOpenModal={onOpenModal} />
      <S.CardsContainer>
        {boardList.map(({ id, image, title, description }) => (
          <div key={id}>
            <Link to={id}>
              <Card image={image} title={title} description={description} />
            </Link>
          </div>
        ))}
      </S.CardsContainer>
      <BoardCreationForm addBoard={addBoard} onCloseModal={onCloseModal} modal={modal} />
    </S.Boards>
  );
};

export default Boards;
