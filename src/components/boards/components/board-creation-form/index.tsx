import useMediaQuery from '@mui/material/useMediaQuery';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Modal from '@mui/material/Modal';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useAppDispatch } from 'src/hooks';
import { boardsActionCreator } from 'src/store/actions';
import { MainWrapper, MainTextField, MainButton } from 'src/components/common';
import type { IBoardCreationForm } from 'src/interfaces';
import * as S from '../../styles';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  file: yup.mixed(),
});

const BoardCreationForm: React.FC<IBoardCreationForm> = ({ modal, onCloseModal }) => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
        file: null,
      },
      validationSchema,
      onSubmit: (value) => {
        dispatch(
          boardsActionCreator.addBoard({
            image: values.file ? URL.createObjectURL(values.file[0]) : '',
            title: value.title,
            description: value.description,
          }),
        );
        resetForm();
        onCloseModal();
      },
    });
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('file', acceptedFiles);
    },
  });

  const onClearFile = () => {
    setFieldValue('file', null);
  };

  return (
    <Modal open={modal} onClose={onCloseModal}>
      <S.ModalInner>
        <MainWrapper
          $width={isMobile ? '100%' : '400px'}
          $height={isMobile ? '100%' : undefined}
          $padding="24px"
        >
          <form onSubmit={handleSubmit}>
            {values.file ? (
              <S.ImageContainer>
                <S.ActiveImage src={URL.createObjectURL(values.file[0])} />
                <S.ClearButton onClick={onClearFile}>
                  <CloseRoundedIcon />
                </S.ClearButton>
              </S.ImageContainer>
            ) : (
              <S.DropZone {...getRootProps()} isDragAccept={isDragAccept}>
                <input {...getInputProps()} />
                <div>Drop the files here...</div>
              </S.DropZone>
            )}
            <MainTextField
              fullWidth
              id="title"
              name="title"
              label="Board title"
              type="text"
              value={values.title}
              onChange={handleChange}
              error={touched.title && !!errors.title}
              helperText={touched.title && errors.title}
            />
            <MainTextField
              fullWidth
              id="description"
              name="description"
              label="Board description"
              type="text"
              value={values.description}
              onChange={handleChange}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
            />
            <S.ButtonsContainer>
              <MainButton
                text="Cancel"
                type="button"
                $style="empty"
                $size="big"
                $gap="12px"
                onClick={onCloseModal}
              />
              <MainButton
                text="Create"
                type="submit"
                $style="primary"
                $size="big"
                icon={<AddRoundedIcon sx={{ width: '20px' }} />}
              />
            </S.ButtonsContainer>
          </form>
        </MainWrapper>
      </S.ModalInner>
    </Modal>
  );
};

export default BoardCreationForm;
