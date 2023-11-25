import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Following = ({ following }) => {

  console.log(following);
  return (
    <div>
      {following ? (
        following.map((follow) => (
          <div className="border-bottom p-3 d-flex align-items-center justify-content-between" key={follow.id}>
            <div className="d-flex justify-content-between">
              <img className="mx-3 rounded-circle" src={follow.avatar_url} width={50} height={50} />
              <div>
                <a className="nav-link text-secondary fw-normal fs-6" href={follow.url}>
                  {follow.login} &nbsp; <span className="text__sm">{follow.login}</span>
                </a>
                <p className="text__sm--12 mb-0 text-muted mt-1">Updated yesterday</p>
                <p className="text__sm--12 mb-0 text-muted mt-2">
                  <HiOutlineOfficeBuilding size={20} /> WebToad s.r.o &nbsp;
                  <span>
                    <GoLocation size={18} /> Tashkent, Uzbekistan
                  </span>
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-light border btn-sm">
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <div className="my-3 p-5 d-flex flex-column align-items-center justify-content-around text-center">
          <BsPeople size={28} />
          <h3 className="mt-1">You're not following anyone yet.</h3>
          <p className="text-muted">
            <a className="text-decoration-none" href="https://docs.github.com/get-started/quickstart/be-social">
              Learn more
            </a>
            about being social in GitHub.
          </p>
        </div>
      )}
    </div>
  );
};

export default Following;
