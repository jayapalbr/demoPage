import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
  });
  const { username, password, firstName, lastName, address } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <div className="login_container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-warning">
                <p className="h4">Login Here </p>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      className="form-control"
                      placeholder="Username"
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      className="form-control"
                      placeholder="Password"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      className="form-control"
                      placeholder="firstName"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      className="form-control"
                      placeholder="lastName"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="address"
                      value={address}
                      className="form-control"
                      placeholder="address"
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="submit"
                      className="nav-link nav_login text-dark fw-bold"
                      value="Login"
                    />
                  </div>
                  <button
                    className="nav-link nav_login text-dark fw-bold"
                    onClick={() => {
                      navigate("/logout");
                    }}
                  >
                    LogOut
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
