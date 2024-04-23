'use client';

import { useEffect, useState } from 'react';
import { getUsers } from '@/services/users';
import { User } from '@/types/user';
import { ListUser } from '@/components/user/list';

export const ListUserPage = () => {
  const [users, setUsers] = useState<User[] | []>([]);

  const fetchUsers = async () => {
    const response = await getUsers();
    if (response.data.success) {
      setUsers(response.data.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <ListUser users={users} />;
};

export default ListUserPage;
