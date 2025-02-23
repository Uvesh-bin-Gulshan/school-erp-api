import React from "react";
import Login from "./Login";

const Page = () => {
  return (
    <>
      <div className="flex   items-center justify-center min-h-screen min-w-screen">
        <div className="text-center  w-1/3">
          <h1 className="mb-6 capitalize text-xl ">
            Matliwala Charitable Trust
          </h1>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Page;
