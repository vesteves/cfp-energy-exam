'use client';

import { ListUser } from '@/components/user/list';
import { UsersProvider } from '@/contexts/UsersContext';
import { useRouter } from 'next/navigation';

import * as S from './style';

export const ListUserPage = () => {
  const router = useRouter();
  return (
    <UsersProvider>
      <S.Button
        variant="contained"
        onClick={() => router.push('/admin/user/create')}
      >
        Create
      </S.Button>
      <ListUser />
    </UsersProvider>
  );
};

export default ListUserPage;
