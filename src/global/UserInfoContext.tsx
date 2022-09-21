import { createContext, useContext, useState } from 'react';
import UserType from '../@types/UserTypes';

export const UserInfoContext = createContext<UserType>({
  name: '',
  email: '',
  setName: () => {},
  setEmail: () => {},
});

const useUserInfoContext = () => useContext(UserInfoContext);

export const UserInfoContextProvider = ({ children }: any) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const value: UserType = {
    name,
    email,
    setName,
    setEmail,
  };

  return (
    <UserInfoContext.Provider value={value}>
      { children }
    </UserInfoContext.Provider>
  );
};

export default useUserInfoContext;
