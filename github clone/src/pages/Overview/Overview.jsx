import React, { useContext } from "react";
import { UserCreateContext } from "../../context/UserContext";
import { BsStar } from "react-icons/bs";
const Overview = () => {
  const { repo } = useContext(UserCreateContext);

  return (
    <>
      <div className="overview__repos my-5">
        <div className="d-flex algin-items-center justify-content-between">
          <p className="m-0 text-muted text__sm">Popular repositories</p>
          <p className="m-0 text-muted text__sm">Customize your pins</p>
        </div>
        <div className="row">
          {repo.slice(0, 6).map((item) => (
            <div className="col-6" key={item.id}>
              <div className="card my-3 p-3 d-flex justify-content-between">
                <div className="d-flex flex-column align-items-start justify-content-between">
                  <a className="nav-link text-primary fs-6" href={`https://github.com/${item.full_name}`} target="_blank">
                    {item?.name}
                  <span className="badge ms-3 rounded-pill bg-white text-muted border">Public</span>
                  </a>
                  <p className="mb-0 mt-3 text-muted text__sm">My first github</p>
                </div>
                <p className="text__sm mb-0 my-1 text-muted">{item.description}</p>
                <p className=" mb-0 mt-3 me-3">
                  {item.language && (
                    <>
                      <span
                        className={`circle ${
                          item.language === "HTML"
                            ? "orange"
                            : item.language === "CSS"
                            ? "purple"
                            : item.language === "JavaScript"
                            ? "yellow"
                            : item.language === "TypeScript"
                            ? "blue"
                            : "pink"
                        }`}
                      ></span>
                      <span className="me-3">{item.language}</span>
                    </>
                  )}
                  {item.stargazers_count && (
                    <span className="text__sm">
                      <BsStar className="star" /> {item.stargazers_count}
                    </span>
                  )}
                  {item.updated_at && <span className="text__sm--12 ms-3">Updated on {item.updated_at}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;
