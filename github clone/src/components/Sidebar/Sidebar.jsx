import { useContext } from "react";
import { UserCreateContext } from "../../context/UserContext";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import API from "../../API/API";
import "./style.scss";

const Sidebar = () => {
  const { setFollowing, user } = useContext(UserCreateContext);
  const followingHandler = (e) => {
    API.getFollowing(e)
      .then((response) => {
        setFollowing(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="sidebar">
      <img src={user.avatar_url} className="profile__img rounded-circle" />
      <div className="side__box">
        <h4 className="mb-0 mt-4">{user.name}</h4>
        <h5 className="fw-light mb-4">{user.login}</h5>
        <button className="edit__btn btn btn-sm btn-outline-secondary bg-light shadow-sm fw-semibold w-100 mx-auto text-dark mb-2">
          Edit Profile
        </button>
        <div className="bio">
          <p>{user.bio}</p>
          <p className="followers my-3">
            <Link to="/followers">
              <BsPeople /> <span>{user.followers}</span> followers
            </Link>
            <span> · </span>
            <Link to="/following" >
              <button className="following__btn" onClick={() =>  followingHandler(user.login)}>
              <span>{user.following}</span> following
              </button>
            </Link>
          </p>

          {user.company && (
            <p>
              <HiOutlineOfficeBuilding /> user.company
            </p>
          )}

          {user.location && (
            <p>
              <GoLocation /> {user.location}
            </p>
          )}

          {user.email && (
            <p>
              <CiMail /> <a href={`mailto:${user.email}`}></a>
              {user.email}
            </p>
          )}

          {user.twitter_username && (
            <p>
              <BsTwitter />
              <a className="text-decoration-none" href={`https://twitter.com/${user.twitter_username}`}>
                {user.twitter_username}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
