'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import { User } from '@/types/user';

export const EditUser = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(user ? false : true);
  }, [user]);

  return (
    <>
      {loading && <S.CircularProgress />}
      {!loading && user.full_name}
    </>
  );
};

export default EditUser;
