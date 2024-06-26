export interface User {
  id: number | null;
  full_name: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  mobile: string;
  date_of_birth: string;
  date_of_birth_human: string;
  password?: string;
}
