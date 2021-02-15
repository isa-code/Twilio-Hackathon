import React, { Component } from "react";
import "../Pages/Activity.css";

class ActivitySubscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeInputEmail: "",
      activeInputPwd: "",
      activeInputCheck: false,
      newInputName: "",
      newInputLastame: "",
      newInputEmail: "",
      newInputCheck: false,
    };
  }

  activeInputEmail = (event) => {
    this.setState({ activeInputEmail: event.target.value });
  };

  activeInputPwd = (event) => {
    this.setState({ activeInputPwd: event.target.value });
  };

  activeInputCheck = (event) => {
    this.setState({ activeInputCheck: true });
  };

  newInputName = (event) => {
    this.setState({ newInputName: event.target.value });
  };

  newInputLastame = (event) => {
    this.setState({ newInputLastame: event.target.value });
  };

  newInputEmail = (event) => {
    this.setState({ newInputEmail: event.target.value });
  };

  newInputCheck = (event) => {
    this.setState({ newInputCheck: true });
  };

  activBtnSubmit = (event) => {
    event.preventDefault();
    this.props.activOnEvent(event);
  };

  newBtnSubmit = (event) => {
    event.preventDefault();
    this.props.newOnEvent(event);
  };

  render() {
    return (
      <div>
        <h2 className="subsTit">Want to subscribe to this mission?</h2>

        <div id="activSubsc">
          <div id="activExistSubsc">
            <h3 className="activSubscTitle">already a member ?</h3>

            <form onSubmit={this.activBtnSubmit} id="activSubscData">
              <input
                onChange={this.activeInputEmail}
                id="activSEmail"
                type="text"
                placeholder="Email"
                required={true}
                value={this.state.activeInputEmail}
              />
              <br />

              <input
                onChange={this.activeInputPwd}
                id="activSPwd"
                type="Password"
                placeholder="Password"
                required={true}
                value={this.state.activeInputPwd}
              />
              <br />

              <input
                onChange={this.activeInputCheck}
                id="activSConf"
                type="checkbox"
                name="conf"
                required={true}
                value={this.state.activeInputCheck}
              />

              <label htmlFor="conf">I confirm I want to participate</label>
              <br />

              <button type="submit"> Sign in for this mission!</button>
            </form>
          </div>

          <div id="activNewSubsc">
            <h3 className="activSubscTitle">New member</h3>
            <form onSubmit={this.newBtnSubmit} id="NewSubscrData">
              <input
                onChange={this.newInputName}
                id="newSubscrFName"
                type="text"
                placeholder="Your First name"
                required={true}
                value={this.state.newInputName}
              />
              <br />

              <input
                onChange={this.newInputLastame}
                id="newSubscrLName"
                type="text"
                placeholder="Your Last name"
                required={true}
                value={this.state.newInputLastame}
              />
              <br />

              <input
                onChange={this.newInputEmail}
                id="newSubscrLEmail"
                type="email"
                placeholder="Your Email"
                required={true}
                value={this.state.newInputEmail}
              />
              <br />

              <input
                onChange={this.newInputCheck}
                id="newSubscConf"
                type="checkbox"
                name="conf"
                required={true}
                value={this.state.newInputCheck}
              />
              <label htmlFor="conf">I want to join</label>
              <br />

              <button type="submit"> Join the team</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivitySubscribe;
