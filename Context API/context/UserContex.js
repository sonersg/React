import { createContext, useContext, useState } from "react";

const UserContex = createContext();

export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const values = {
    user,
    setuser,
  };
  return <UserContex.Provider value={values}>{children}</UserContex.Provider>;
};

// export default UserContex;

export const useUser = () => useContext(UserContex);
