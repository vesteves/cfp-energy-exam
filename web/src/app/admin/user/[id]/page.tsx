'use client';

import { EditUser } from '@/components/user/edit';
import { getUser } from '@/services/users';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './style';
import { rawUser } from '@/raws/user';

export const EditUserPage = ({ params }: { params: { id: number } }) => {
  const [user, setUser] = useState<User>({ ...rawUser });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async (id: number) => {
    setLoading(true);
    const response = await getUser(id);
    setUser(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  return (
    <>
      {loading && <S.CircularProgress />}
      {!loading && <EditUser user={user} />}
    </>
  );
};

export default EditUserPage;
