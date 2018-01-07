import React, { Component } from "react";

const generateMessage = isGameActive => {
  return isGameActive ? "" : "Do you wanna play?";
};

class Message extends Component {
  render() {
    return <span>{generateMessage(this.props.isGameActive)}</span>;
  }
}

export default Message;
