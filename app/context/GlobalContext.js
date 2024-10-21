"use client";
import { createContext, useState, useContext, useEffect } from "react";
import sampleHikes from "../assets/sampleHikes";
import sampleAppUsers from "../assets/sampleAppUsers";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  //Initialize states with sample data
  const [appUsers, setAppUsers] = useState(sampleAppUsers);
  const [currentUser, setCurrentUser] = useState(sampleAppUsers[0]);
  const [hikes, setHikes] = useState(sampleHikes);

  useEffect(() => {
    // const storedUsers = JSON.parse(localStorage.getItem("appUsers"));
    // const storedHikes = JSON.parse(localStorage.getItem("hikes"));
    // const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    localStorage.clear();
    localStorage.setItem("hikes", JSON.stringify(sampleHikes));
    localStorage.setItem("appUsers", JSON.stringify(sampleAppUsers));
    localStorage.setItem("currentUser", JSON.stringify(sampleAppUsers[0]));
  }, []);
  
  // Store info in localStorage when it changes
  // useEffect(() => {
  //   localStorage.setItem("hikes", JSON.stringify(hikes));
  // }, [hikes]);

  // useEffect(() => {
  //   localStorage.setItem("appUsers", JSON.stringify(appUsers));
  // }, [appUsers]);
  
  // useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // }, [currentUser]);
  

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        appUsers,
        setAppUsers,
        hikes,
        setHikes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
