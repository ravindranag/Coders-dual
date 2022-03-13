import React, { createContext, useState } from "react";

const UserDetails = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: "",
    registration_number: "",
    code_id: "",
  });

  const [content, setContent] = useState("")

  return (
    <UserDetails.Provider value={{user, setUser, content, setContent}}>
      {children}
    </UserDetails.Provider>
  );
};

export { UserDetails, UserProvider };
