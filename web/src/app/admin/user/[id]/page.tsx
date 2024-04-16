'use client';

import { EditUser } from '@/components/user/edit';
import { getUser } from '@/services/users';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';

export const EditUserPage = ({ params }: { params: { id: number } }) => {
  const rawUser = {
    id: null,
    full_name: '',
    username: '',
    email: '',
    mobile: '',
    date_of_birth: '',
  };
  const [user, setUser] = useState<User>({ ...rawUser });

  const fetchUser = async (id: number) => {
    const response = await getUser(id);
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUser(params.id);
  }, [params]);

  return <EditUser user={user} />;
};

export default EditUserPage;
