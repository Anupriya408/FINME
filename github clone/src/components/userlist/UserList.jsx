import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import { UserCreateContext } from "../../context/UserContext";
import "./style.scss";

const UserList = () => {
  const { setUser,users,setLoading } = useContext(UserCreateContext);
  console.log(users);
  const navigate = useNavigate();

  const userHandler = (user) => {
    setLoading(true);
    API.getUser(user.login)
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
    navigate("/");
  };
  return (
    <>
      {users.length > 0 ? (
        <ul className="user__list my-4 mx-4 border rounded shadow py-3 pe-5">
          <p className="text-center text-muted">Users matching your search: {users.length}</p>
          {users.map((user) => (
            <li onClick={() => userHandler(user)} key={user.id}>
              <img src={user.avatar_url} width={40} className="rounded-circle me-3 my-2" />
              {user.login}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h4 className="text-center mt-5 text-danger">No user found! </h4>
          <p className="text-center text-muted">Please, enter an existing username!</p>
        </div>
      )}
    </>
  );
};

export default UserList;
