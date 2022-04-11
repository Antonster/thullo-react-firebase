import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Dialog from '@mui/material/Dialog';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainWrapper, MainTextField, MainButton } from 'src/components/common';
import type { IBoardCreationForm } from 'src/interfaces';
import * as S from '../../styles';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  file: yup.mixed(),
});

const BoardCreationForm: React.FC<IBoardCreationForm> = ({ modal, onCloseModal, addBoard }) => {
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        title: '',
        description: '',
        file: null,
      },
      validationSchema,
      onSubmit: (value) => {
        addBoard(
          values.file ? URL.createObjectURL(values.file[0]) : '',
          value.title,
          value.description,
        );
        resetForm();
        onCloseModal();
      },
    });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('file', acceptedFiles);
    },
  });

  const onClearFile = () => {
    setFieldValue('file', null);
  };

  return (
    <Dialog open={modal} onClose={onCloseModal}>
      <MainWrapper $width="400px" $padding="24px">
        <form onSubmit={handleSubmit}>
          {values.file ? (
            <S.ImageContainer>
              <S.ActiveImage src={URL.createObjectURL(values.file[0])} />
              <S.ClearButton onClick={onClearFile}>
                <CloseRoundedIcon />
              </S.ClearButton>
            </S.ImageContainer>
          ) : (
            <S.DropZone {...getRootProps()}>
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
    </Dialog>
  );
};

export default BoardCreationForm;
