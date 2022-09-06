import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";






export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token != null) {
      fetch("https://kenziehub.herokuapp.com/profile", {
        method: "GET",
        headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((response) => setUser(response))
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
