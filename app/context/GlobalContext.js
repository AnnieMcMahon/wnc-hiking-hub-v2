"use client";
import { createContext, useState, useContext, useEffect } from "react";
import sampleHikes from "../assets/sampleHikes";
import sampleAppUsers from "../assets/sampleAppUsers";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  //Initialize states with sample data for testing purposes
  const [appUsers, setAppUsers] = useState(sampleAppUsers);
  const [currentUser, setCurrentUser] = useState(sampleAppUsers[0]);
  const [hikes, setHikes] = useState(sampleHikes);

  useEffect(() => {
    //Load initial data in localstorage and state for testing purposes
    localStorage.clear();
    localStorage.setItem("hikes", JSON.stringify(sampleHikes));
    localStorage.setItem("appUsers", JSON.stringify(sampleAppUsers));
    localStorage.setItem("currentUser", JSON.stringify(sampleAppUsers[0]));
    setHikes(sampleHikes);
    setAppUsers(sampleAppUsers);
    setCurrentUser(sampleAppUsers[0]);
    /* Verify data is correct on state and local storage
    console.log(hikes);
    console.log(appUsers);
    console.log(currentUser);
    console.log(JSON.parse(localStorage.getItem("hikes")));
    console.log(JSON.parse(localStorage.getItem("appUsers")));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    */

    /* Code needed for future use
    const storedUsers = JSON.parse(localStorage.getItem("appUsers"));
    if (storedUsers) {
      setAppUsers(storedUsers);
    } else {
      localStorage.setItem("appUsers", JSON.stringify(sampleAppUsers));
    }

    const storedHikes = JSON.parse(localStorage.getItem("hikes"));
    if (storedHikes) {
      setHikes(storedHikes);
    } else {
      localStorage.setItem("hikes", JSON.stringify(sampleHikes));
    }
    
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    } else {
      localStorage.setItem("currentUser", JSON.stringify(sampleAppUsers[0]));
    } */
  }, []);

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
