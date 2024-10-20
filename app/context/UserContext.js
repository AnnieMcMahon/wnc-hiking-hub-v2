'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import appUsers from '../assets/appUsers';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = appUsers[0];
    setCurrentUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
