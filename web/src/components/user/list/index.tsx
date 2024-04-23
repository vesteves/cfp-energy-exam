'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './style';
import { User } from '@/types/user';

export const ListUser = ({ users }: { users: User[] | [] }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(users ? false : true);
  }, [users]);

  return (
    <>
      {loading && <S.CircularProgress />}
      {!loading && (
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
                        <S.DeleteIcon />
                      </S.ActionWrapper>
                    </S.TableCell>
                  </S.TableRow>
                ))}
            </S.TableBody>
          </S.Table>
        </S.TableContainer>
      )}
    </>
  );
};

export default ListUser;
