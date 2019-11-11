import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class Search extends Component {
  state = {
    user: {},
    notFound: false
  };

  UNSAFE_componentWillMount() {
    axios
      .get(
        `https://api.github.com/users/${this.props.match.params.id}?q=location:bangalore`
      )
      .then(res => {
        var user = res.data;
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ notFound: true });
      });
  }

  render() {
    if (!this.state.notFound)
      return <User key={this.state.user.id} user={this.state.user} />;
    else return <h1>No User Found</h1>;
  }
}
