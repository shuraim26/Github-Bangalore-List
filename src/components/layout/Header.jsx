import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  const [searchId, setSearchId] = useState("");

  const onChange = e => setSearchId(e.target.value);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Github Bangalore Search
        </Link>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={onChange}
              />
              <Link
                to={`/search/${searchId}`}
                className="btn my-2 my-sm-0"
                style={{ color: "#FFF" }}
              >
                Search
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
