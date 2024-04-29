import { createContext, useState, useEffect, ReactNode } from 'react';
import { getUsers } from '@/services/users';
import { User } from '@/types/user';

interface UsersContextType {
  users: User[];
  fetchUsers: () => Promise<void>;
}

const contextDefaultValues: UsersContextType = {
  users: [],
  fetchUsers: async () => {},
};

export const UsersContext =
  createContext<UsersContextType>(contextDefaultValues);

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      if (response.data && response.data.success) {
        setUsers(response.data.data.data);
      }
    } catch (error: any) {
      throw new Error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
