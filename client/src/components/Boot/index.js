import React from "react";
import withRedirectAuthUsers from "../AuthComponent/HOCs/withRedirectAuthUsers";

const Boot = () => {
  return (
    <div
      style={{
        height: "100vh"
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <img
        src="https://via.placeholder.com/200"
        alt="logo"
        style={{
          borderRadius: "50%",
          boxShadow: "60px 60px 100px 0px rgba(241,241,241,1)"
        }}
      />
    </div>
  );
};

export default withRedirectAuthUsers(Boot, "/signin");
