import React from "react";
import "../App.css";
import { Breadcrumb } from "react-bootstrap";

export const Blanketter = () => (
  <div>
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item href="/">Hem</Breadcrumb.Item>

      <Breadcrumb.Item active>Blanketter </Breadcrumb.Item>
    </Breadcrumb>
    <h1>här ska alla Blanketter vara...</h1>
    <h1>här ska alla Blanketter vara...</h1>
  </div>
);
