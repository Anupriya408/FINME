import React from "react";
import "./style.scss";
import packageIcon from "./../../assets/images/icons8-nvstec-96.png";

const Packages = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-around">
        <img className="my-3" src={packageIcon} />
        <h2>Get started with GitHub Packages</h2>
        <p className="text-muted ">
          Safely publish packages, store your packages alongside your code, and share your packages privately with your team.
        </p>
      </div>
      <h5 className="text-muted text-center fw-light mt-5 mb-3">Choose a registry</h5>
      <div className="row mb-5">
        <div className="col-4">
          <div className="card p-3">
            <h5>Docker</h5>
            <p className="text-muted text__sm">
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className="btn btn-light btn-sm w-50 rounded border">Learn more</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-3">
            <h5>Docker</h5>
            <p className="text-muted text__sm">
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className="btn btn-light btn-sm w-50 rounded border">Learn more</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-3">
            <h5>Docker</h5>
            <p className="text-muted text__sm">
              A software platform used for building applications based on containers — small and lightweight execution environments.
            </p>
            <button className="btn btn-light btn-sm w-50 rounded border">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
