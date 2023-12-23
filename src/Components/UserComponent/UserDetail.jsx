import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  //   const userId = useParams();
  //   const id = userId.id;
  const { id } = useParams();

  return (
    <>
      <div className="bg-blue-400">
        <h1 className="font-extrabold">User Detail Page =======-- {id} </h1>
      </div>
    </>
  );
};

export default UserDetail;
