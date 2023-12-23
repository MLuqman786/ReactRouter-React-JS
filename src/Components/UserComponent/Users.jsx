import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div>
        <h1>Users Page</h1>
        <Link className="px-3 bg-blue-600 m-2 text-white" to="/users/1">
          User 1
        </Link>
        <Link className="px-3 bg-blue-600 m-2 text-white" to="/users/2">
          User 2
        </Link>
        <Link className="px-3 bg-blue-600 m-2 text-white" to="/users/3">
          User 3
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Users;
