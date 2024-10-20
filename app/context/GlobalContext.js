"use client";
import { createContext, useState, useContext, useEffect } from "react";

const 
GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [appUsers, setAppUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("appUsers")) || [];
    setAppUsers(storedUsers);
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    const storedHikes = JSON.parse(localStorage.getItem("hikes")) || [];
    setHikes(storedHikes);
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser, appUsers, setAppUsers, hikes, setHikes }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
