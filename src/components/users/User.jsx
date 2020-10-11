import React from "react";

const User = ({ user }) => {
  
  const { login, avatar_url } = user;

  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "400px",
        margin: "auto",
        marginBottom: "20px"
      }}
    >
      <img src={avatar_url} className="card-img-top" alt={login} />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ textAlign: "center", fontWeight: "bold", color: "red" }}
        >
          {login}
        </h5>
      </div>
    </div>
  );
};

export default User;
