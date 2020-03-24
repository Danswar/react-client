import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../store/actions/authAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div>
      <div
        style={{
          height: "220px",
          background: "#8a8adf"
        }}
      ></div>

      <div
        style={{
          position: "relative",
          top: "-100px",
          zIndex: "100"
        }}
        className="text-center"
      >
        <div>
          {user.picture ? (
            <img
              src={user.picture}
              alt="profile"
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
          ) : (
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="grey"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
          )}
        </div>
        <h1 className="mt-3">
          Hello <strong>{user.sub}</strong>, welcome to your dashboard
        </h1>
        <h3 className="mt-4">
          The information below is storaged in redux and come to the server on a
          jwt token
        </h3>
        <p>{JSON.stringify(user, null, 2)}</p>
        <button className="btn btn-outline-danger mt-4" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
