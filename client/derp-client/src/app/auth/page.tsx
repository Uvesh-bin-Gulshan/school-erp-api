import React from "react";
import Login from "./Login";

const Page = () => {
  return (
    <>
      <div className="flex   items-center justify-center min-h-screen ">
        <div className="text-center ">

          <h1 className="mb-4 capitalize text-xl ">login</h1>
          <Login />
        </div>
        
        
      </div>
    </>
  );
};

export default Page;
