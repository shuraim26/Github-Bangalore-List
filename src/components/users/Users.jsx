import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class Users extends Component {
  state = {
    users: [],
    pageNo: 1
  };

  getUsers = () => {
    axios
      .get(
        `https://api.github.com/search/users?q=location:bangalore&page=${this.state.pageNo}&per_page=9`
      )
      .then(res => {
        var users = res.data.items;
        this.setState({ users });
      });
  };

  UNSAFE_componentWillMount() {
    this.getUsers();
  }

  UNSAFE_componentWillUpdate() {
    this.getUsers();
  }

  onPageIncrease = () => {
    this.setState({ pageNo: this.state.pageNo + 1 });
    //this.getUsers();
  };

  onPageDecrease = () => {
    if (this.state.pageNo > 1) this.setState({ pageNo: this.state.pageNo - 1 });
    //this.getUsers();
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <div className="row">
          {users.map(user => (
            <div className="col-4">
              <User key={user.id} user={user} />
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <div className="page-link" onClick={this.onPageDecrease}>
                Previous
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={this.onPageIncrease}>
                Next
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
