'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import { getUsers } from '@/services/users';
import { Users } from '@/types/user';

export const ListUser = () => {
  const [users, setUsers] = useState<Users[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await getUsers();
    if (response.data.success) {
      setUsers(response.data.data.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading && <S.CircularProgress />}
      {!loading && (
        <S.TableContainer component={S.Paper}>
          <S.Table sx={{ minWidth: 650 }} aria-label="list user table">
            <S.TableHead>
              <S.TableRow>
                <S.TableCell>Fullname</S.TableCell>
                <S.TableCell align="right">Username</S.TableCell>
                <S.TableCell align="right">E-mail</S.TableCell>
                <S.TableCell align="right">Mobile</S.TableCell>
                <S.TableCell align="right">Date of Birth</S.TableCell>
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
                    <S.TableCell align="right">{row.username}</S.TableCell>
                    <S.TableCell align="right">{row.email}</S.TableCell>
                    <S.TableCell align="right">{row.mobile}</S.TableCell>
                    <S.TableCell align="right">{row.date_of_birth}</S.TableCell>
                  </S.TableRow>
                ))}
            </S.TableBody>
          </S.Table>
        </S.TableContainer>
      )}
    </>
  );
};
