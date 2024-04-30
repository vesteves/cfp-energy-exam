'use client';

import { useRouter } from 'next/navigation';

import * as S from './style';
import { useState } from 'react';
import { createUser } from '@/services/users';
import { rawUser } from '@/raws/user';

export const CreateUser = () => {
  const [formData, setFormData] = useState({
    ...rawUser,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const handleChange =
    (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [prop]: e.target.value,
      });
    };

  const handleSubmit = async () => {
    try {
      const response = await createUser(formData);

      if (response.success) {
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 5000);
        return;
      }

      setErrorMessage(response.error.message);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    } catch (error: any) {
      setErrorMessage(error.message);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }
  };

  return (
    <>
      {showSuccessAlert && (
        <S.Alert icon={<S.CheckIcon fontSize="inherit" />} severity="success">
          User created.
        </S.Alert>
      )}
      {showErrorAlert && (
        <S.Alert icon={<S.CheckIcon fontSize="inherit" />} severity="error">
          {errorMessage}
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
          <S.InputLabel htmlFor="password">Password</S.InputLabel>
          <S.Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
          />
        </S.FormControl>
      </S.FormWrapper>

      <S.FormWrapper>
        <S.FormControl>
          <S.InputLabel htmlFor="username">Username</S.InputLabel>
          <S.Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange('username')}
          />
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

export default CreateUser;
