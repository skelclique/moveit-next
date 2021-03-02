import { createContext, ReactNode, useState } from 'react';

interface UserContextData {
  username: string;
  handleUsername: (username: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState('');

  function handleUsername(username: string) {
    setUsername(username);
  }

  return (
    <UserContext.Provider
      value={{
        handleUsername,
        username,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
