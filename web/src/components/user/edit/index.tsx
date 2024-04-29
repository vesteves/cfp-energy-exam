'use client';

import type { User } from '@/types/user';
import { useRouter } from 'next/navigation';

import * as S from './style';
import { useState } from 'react';
import { updateUser } from '@/services/users';

export const EditUser = ({ user }: { user: User }) => {
  const [formData, setFormData] = useState({
    ...user,
    date_of_birth: user.date_of_birth.split('T')[0],
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const router = useRouter();

  const handleChange =
    (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [prop]: e.target.value,
      });
    };

  const handleSubmit = async () => {
    if (formData.id) {
      try {
        const response = await updateUser(formData);

        if (response.data.success) {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 5000);
          return;
        }
      } catch (error: any) {
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 5000);
      }
    }
  };

  return (
    <>
      {showSuccessAlert && (
        <S.Alert icon={<S.CheckIcon fontSize="inherit" />} severity="success">
          User updated.
        </S.Alert>
      )}
      {showErrorAlert && (
        <S.Alert icon={<S.CheckIcon fontSize="inherit" />} severity="error">
          Error. Please review the info and try again later.
        </S.Alert>
      )}
      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="email">E-Mail</S.InputLabel>
          <S.Input
            id="email"
            name="email"
            type="email"
            aria-describedby="email-helper"
            value={formData.email}
            onChange={handleChange('email')}
          />
          <S.FormHelperText id="email-helper">
            This e-mail will only be used for login.
          </S.FormHelperText>
        </S.FormControl>
      </S.FormWrapper>

      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="first_name">First Name</S.InputLabel>
          <S.Input
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange('first_name')}
          />
        </S.FormControl>
      </S.FormWrapper>

      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="last_name">Last Name</S.InputLabel>
          <S.Input
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange('last_name')}
          />
        </S.FormControl>
      </S.FormWrapper>

      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="mobile">Mobile</S.InputLabel>
          <S.Input
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange('mobile')}
          />
        </S.FormControl>
      </S.FormWrapper>

      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="date_of_birth">Date of Birth</S.InputLabel>
          <S.Input
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            value={formData.date_of_birth}
            onChange={handleChange('date_of_birth')}
          />
        </S.FormControl>
      </S.FormWrapper>

      <S.Footer>
        <S.ButtonGroup variant="contained" aria-label="Basic button group">
          <S.Button variant="contained" onClick={() => router.back()}>
            <S.UndoIcon /> Back
          </S.Button>
          <S.Button variant="contained" onClick={() => handleSubmit()}>
            <S.SaveIcon /> Save
          </S.Button>
        </S.ButtonGroup>
      </S.Footer>
    </>
  );
};

export default EditUser;
