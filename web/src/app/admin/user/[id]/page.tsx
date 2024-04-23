'use client';

import { EditUser } from '@/components/user/edit';
import { getUser } from '@/services/users';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './style';

export const EditUserPage = ({ params }: { params: { id: number } }) => {
  const rawUser = {
    id: null,
    full_name: '',
    username: '',
    email: '',
    mobile: '',
    date_of_birth: '',
    date_of_birth_human: '',
  };
  const [user, setUser] = useState<User>({ ...rawUser });

  const router = useRouter();

  const fetchUser = async (id: number) => {
    const response = await getUser(id);
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  return (
    <>
      <EditUser user={user} />
      <S.Footer>
        <S.ButtonGroup variant="contained" aria-label="Basic button group">
          <S.Button variant="contained" onClick={() => router.back()}>
            <S.UndoIcon /> Back
          </S.Button>
          <S.Button variant="contained">
            <S.SaveIcon /> Save
          </S.Button>
        </S.ButtonGroup>
      </S.Footer>
    </>
  );
};

export default EditUserPage;
