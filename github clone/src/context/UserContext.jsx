import { createContext, useState } from "react";

export const UserCreateContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <UserCreateContext.Provider
      value={{ users, setUsers, repo, setRepo, user, setUser, loading, setLoading, followers, setFollowers, following, setFollowing }}
    >
      {children}
    </UserCreateContext.Provider>
  );
};

export default UserProvider;
