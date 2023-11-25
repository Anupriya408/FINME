import React from "react";
import { BsStar } from "react-icons/bs";

const Stars = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-3">
        <h5 className="text-muted fw-lighter">Lists (0) </h5>
        <div className="d-flex align-items-center">
          <select className="form-select form-select-sm bg-light w-50" aria-label=".form-select-sm example">
            <option>Sort</option>
            <option value="1">Name ascending (A-Z)</option>
            <option value="2">Name descending (A-Z)</option>
            <option value="3">Newest</option>
            <option value="3">Oldest</option>
            <option value="3">Last updated</option>
          </select>
          <button className="btn btn-success btn-sm w-50 ms-2">Create list</button>
        </div>
      </div>

      <div className="card p-5 my-3 align-items-center">
        <BsStar />
        <h4 className="pt-2">Create your first GitHub project</h4>
        <p className="text-muted ">Projects are a customizable, flexible tool for planning and tracking your work.</p>
        <button className="btn btn-success btn-sm">New project</button>
      </div>

    </div>
  );
};

export default Stars;
