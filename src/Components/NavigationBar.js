import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import "./Header/Header.css";
import TreeView from "@material-ui/lab/TreeView";

import TreeItem from "@material-ui/lab/TreeItem";

const Styles = styled.div`
  .navbar {
    background-color: white;
    border-style: 1px black solid;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link .DropdownButton {
    color: #bbb;
    &:hover {
      color: white;
    }
    .dropdown.item {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className="navline" expand="lg">
      <Navbar.Brand href="solklart/#/">
        <img src="solklart.ico" height="60" width="100" alt="Solklart"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Button href="solklart/#/" className="button">
              Hem
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button href="/solklart/#/mycases" className="button">
              Mina Ärenden
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button href="/solklart/#/blanketter" className="button">
              Blanketter
            </Button>
          </Nav.Item>

          <Nav.Item>
            <DropdownButton className="navitem" title="Meny">
              <TreeView>
                <TreeItem to="/salary" nodeId="1" label="Lön">
                  <Link to="/absence">
                    <TreeItem nodeId="2" label="Frånvaro" />
                  </Link>
                  <Link to="/missonfee">
                    <TreeItem nodeId="3" label="Arvode/Uppdrag" />
                  </Link>

                  <TreeItem href="/certificate" nodeId="4" label="Intyg">
                    <TreeItem nodeId="8" label="test" />
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="5" label="IT">
                  <TreeItem nodeId="6" label="test" />
                  <TreeItem nodeId="6" label="test" />
                  <TreeItem nodeId="6" label="test">
                    <TreeItem nodeId="7" label="test">
                      <TreeItem nodeId="8" label="test" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
                <Link to="/economy">
                  <TreeItem nodeid="10" label="Ekonomi"></TreeItem>
                </Link>
              </TreeView>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
