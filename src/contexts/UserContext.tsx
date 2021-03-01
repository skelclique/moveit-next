import { createContext, ReactNode, useState } from 'react';

interface UserContextData {
  changeUsername: (username: string) => void;
  username: string;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState('');

  function changeUsername(username: string) {
    setUsername(username);
  }

  return (
    <UserContext.Provider value={{
      changeUsername,
      username
    }}>
        {children}
    </UserContext.Provider>
  );
}
