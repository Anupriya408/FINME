import React, { useContext, useRef, useState } from "react";
import github from "./../../assets/images/github-logo1-modified.png";
import { FaSortDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { GoPlusSmall } from "react-icons/go";
import "./style.scss";
import { UserCreateContext } from "../../context/UserContext";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const { searchVal, user, setLoading, users, setUsers } = useContext(UserCreateContext);

  const fetchUser = (e) => {
    if (e.keyCode === 13) {
      setLoading(true);
      API.getSearchUser(value)
        .then((response) => {
          setUsers(response.data.items);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      setValue("");
      navigate("/userlist");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="bg-dark" href="./">
            <img src={github} width={30} />
          </a>
          <div className="input-group input-group-sm">
            <input
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              className="main__input ms-3 ps-2 bg-dark border border-secondary "
              placeholder="Search or jump to..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={fetchUser}
            />
            <span className="input-group-text border border-secondary bg-dark text-secondary">/</span>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav2">
            <ul className="menu navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a href="/" className="nav-link">
                  Pull requests
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Issues
                  {searchVal}
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Codespaces
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Explore
                </a>
              </li>
            </ul>
            <ul className="right__menu navbar-nav">
              <li>
                <BsBell className="fw-light" color="white" size={"1.2rem"} />
              </li>
              <li className="mx-2">
                <GoPlusSmall className="plus__icon " color="white" size={"1.5rem"} />
                <FaSortDown className="mb-1" color="white" size={"0.8rem"} />
              </li>
              <li className="ms-2">
                <img src={user.avatar_url} className="rounded-circle" width={20} />
                <FaSortDown className="mb-1" color="white" size={"0.8rem"} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
