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

  //Actual Code: 

  useEffect(() => {
    
    const storedUsers = JSON.parse(localStorage.getItem("appUsers"));
    const storedHikes = JSON.parse(localStorage.getItem("hikes"));
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedUsers) {
      setAppUsers(storedUsers);
    } else {
      localStorage.setItem("appUsers", JSON.stringify(sampleAppUsers));
    }

    if (storedHikes) {
      setHikes(storedHikes);
    } else {
      localStorage.setItem("hikes", JSON.stringify(sampleHikes));
    }

    if (storedUser) {
      setCurrentUser(storedUser);
    } else {
      localStorage.setItem("currentUser", JSON.stringify(sampleAppUsers[0]));
    }

        //Verify data is correct on state and local storage
        console.log(hikes);
        console.log(appUsers);
        console.log(currentUser);
        console.log(JSON.parse(localStorage.getItem("hikes")));
        console.log(JSON.parse(localStorage.getItem("appUsers")));
        console.log(JSON.parse(localStorage.getItem("currentUser")));
  }, []);
  

  // Store current user in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("hikes", JSON.stringify(hikes));
  }, [hikes]);
  useEffect(() => {
    localStorage.setItem("appUsers", JSON.stringify(appUsers));
  }, [appUsers]);
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  //Load initial data in localstorage and state for testing purposes
  /*useEffect(() => {
    localStorage.clear();
    localStorage.setItem("hikes", JSON.stringify(sampleHikes));
    localStorage.setItem("appUsers", JSON.stringify(sampleAppUsers));
    localStorage.setItem("currentUser", JSON.stringify(sampleAppUsers[0]));

    //Verify data is correct on state and local storage
    console.log(hikes);
    console.log(appUsers);
    console.log(currentUser);
    console.log(JSON.parse(localStorage.getItem("hikes")));
    console.log(JSON.parse(localStorage.getItem("appUsers")));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
  }, []);
  */

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
