import {
    useState,
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import { UserDoc } from "../types/User-Model-Challenge";
import { usersArray } from "../users/usersArray";

type Users = { userDoc: UserDoc }[];

type UsersContextType = {
    users: Users;
    setUsers: Dispatch<SetStateAction<Users>>;
};

export const UsersContext = createContext<UsersContextType>({
    users: usersArray,
    setUsers: () => {},
} as UsersContextType);

// const UserContext = createContext<Partial<UserContextType>>({});

type UsersProviderProps = {
    children: ReactNode;
};

export const UsersProvider = ({ children }: UsersProviderProps) => {
    const [users, setUsers] = useState<Users>(usersArray);

    const values = {
        users,
        setUsers,
    };

    return (
        <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
    );
};
