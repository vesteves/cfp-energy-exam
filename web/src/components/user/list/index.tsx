'use client';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './style';
import { deleteUser } from '@/services/users';
import { UsersContext } from '@/contexts/UsersContext';

export const ListUser = () => {
  const { users, fetchUsers } = useContext(UsersContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  useEffect(() => {
    setLoading(!users.length);
  }, [users]);

  const handleDeleteUser = async (id: number | null) => {
    if (id) {
      try {
        const response = await deleteUser(id);

        if (response.data.success) {
          fetchUsers();
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 5000);
          return;
        }
      } catch (error: any) {
        setErrorMessage(error.message);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 5000);
      }
    }
  };

  return (
    <>
      {loading && <S.CircularProgress />}
      {!loading && (
        <>
          {showSuccessAlert && (
            <S.Alert
              icon={<S.CheckIcon fontSize="inherit" />}
              severity="success"
            >
              User deleted.
            </S.Alert>
          )}
          {showErrorAlert && (
            <S.Alert icon={<S.CheckIcon fontSize="inherit" />} severity="error">
              {errorMessage}
            </S.Alert>
          )}
          <S.TableContainer component={S.Paper}>
            <S.Table sx={{ minWidth: 650 }} aria-label="list user table">
              <S.TableHead>
                <S.TableRow>
                  <S.TableCell>Fullname</S.TableCell>
                  <S.TableCell align="left">Username</S.TableCell>
                  <S.TableCell align="left">E-mail</S.TableCell>
                  <S.TableCell align="left">Mobile</S.TableCell>
                  <S.TableCell align="left">Date of Birth</S.TableCell>
                  <S.TableCell align="center">Actions</S.TableCell>
                </S.TableRow>
              </S.TableHead>
              <S.TableBody>
                {users &&
                  users.map((row) => (
                    <S.TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <S.TableCell component="th" scope="row">
                        {row.username}
                      </S.TableCell>
                      <S.TableCell align="left">{row.username}</S.TableCell>
                      <S.TableCell align="left">{row.email}</S.TableCell>
                      <S.TableCell align="left">{row.mobile}</S.TableCell>
                      <S.TableCell align="left">
                        {row.date_of_birth_human}
                      </S.TableCell>
                      <S.TableCell align="center" size="medium">
                        <S.ActionWrapper>
                          <S.EditIcon
                            onClick={() => router.push(`/admin/user/${row.id}`)}
                          />
                          <S.DeleteIcon
                            onClick={() => handleDeleteUser(row.id)}
                          />
                        </S.ActionWrapper>
                      </S.TableCell>
                    </S.TableRow>
                  ))}
              </S.TableBody>
            </S.Table>
          </S.TableContainer>
        </>
      )}
    </>
  );
};

export default ListUser;
