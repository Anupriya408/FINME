import React, { useContext } from "react";
import { VscRepo } from "react-icons/vsc";
import { BsStar } from "react-icons/bs";
import { UserCreateContext } from "../../context/UserContext";
import "./style.scss";

const Repositories = () => {
  const { repo } = useContext(UserCreateContext);

  return (
    <div>
      <div className="repository__bar row my-3">
        <div className="col-6">
          <input className="form-control form-control-sm" type="text" placeholder="Find a repository..." />
        </div>
        <div className="col-6 d-flex">
          <select className="w-25 me-1 form-select form-select-sm bg-light " aria-label="Default select example">
            <option>Type</option>
            <option value="1">All</option>
            <option value="2">Public</option>
            <option value="3">Private</option>
          </select>
          <select className="w-25 mx-1 form-select form-select-sm bg-light px-2" aria-label="Default select example">
            <option>Language</option>
            <option value="1">All</option>
            <option value="2">HTML</option>
            <option value="3">CSS</option>
            <option value="3">JavaScript</option>
          </select>
          <select className="w-25 mx-1 form-select form-select-sm bg-light " aria-label="Default select example">
            <option>Sort</option>
            <option value="1">Last updated</option>
            <option value="2">Name</option>
            <option value="3">Stars</option>
          </select>
          <button className="w-25 ms-1 btn btn-success btn-sm">
            <VscRepo /> New
          </button>
        </div>
      </div>

      <div className="repository__list">
        {repo.map((item) => (
          <div className="border-top py-3 d-flex flex-row justify-content-between" key={item.id}>
            <div className="d-flex flex-column justify-content-between">
              <a className="nav-link text-primary fs-6" href={`https://github.com/${item.full_name}`} target="_blank">
                {item.name}
                <span className="ms-3 badge rounded-pill bg-white text-muted border text-capitalize">{item.visibility}</span>
              </a>

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
                {item.updated_at && (
                  <span className="text__sm--12 ms-3">Updated on {item.updated_at}</span>
                )}
              </p>
            </div>

            <div>
              <div className="this__button btn-group btn-group-sm border" role="group" aria-label="Button group with nested dropdown">
                <div className="btn-group btn-group-sm" role="group">
                  <button type="button" className="btn btn-light px-3 py-0 ">
                    <BsStar className="star" /> Star
                  </button>
                  <button
                    type="button"
                    className="btn btn-light border-start dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <input className="me-2" type="checkbox" name="" id="" />
                        Future ideas
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <input className="me-2" type="checkbox" name="" id="" />
                        My stack
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <input className="me-2" type="checkbox" name="" id="" />
                        Inspiration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
