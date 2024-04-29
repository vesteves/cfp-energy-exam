'use client';

import { ListUser } from '@/components/user/list';
import { UsersProvider } from '@/contexts/UsersContext';

export const ListUserPage = () => {
  return (
    <UsersProvider>
      <ListUser />
    </UsersProvider>
  );
};

export default ListUserPage;
