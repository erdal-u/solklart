import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../App.css";

export const Jumbotron = () => (
  <Jumbo fluid className="jumbo">
    <div className="grid-container">
      <Card className="cards">
        <Card.Body className="cardbody">
          <Card.Title>Ekonomi</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            Vi har ett fulltäckande tjänsteutbud inom kund- och
            leverantörsreskontra samt kassa/bank-tjänster.
          </Card.Text>
          <Link className="cardlink" to="/Economy">
            Ekonomifrågor
          </Link>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body className="cardbody">
          <Card.Title>IT</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            Inom IT erbjuder vi nätverkslösningar och kompletta elev- och
            administratörsdatorer samt därtill hörande support.
          </Card.Text>
          <Link className="cardlink" to="/IT">
            IT-frågor
          </Link>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Body className="cardbody">
          <Card.Title>Lön</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            Vi erbjuder löneadministration med egenrapportering i Självservice
            Lön, personalnyckeltal samt ett antal tilläggs- och specialtjänster.
          </Card.Text>
          <Link className="cardlink" to="/Salary">
            Lönefrågor
          </Link>
        </Card.Body>
      </Card>
    </div>
  </Jumbo>
);
