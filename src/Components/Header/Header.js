import React, { Component } from "react";
import Body from "../Body/Body";
import "./Header.css";
import { Jumbotron } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="bgImg">
        <Body />
        <p>detta är ett test</p>
      </Jumbotron>
    );
  }
}

export default Header;
