import React from "react";
import { Card, Container, Breadcrumb, Button } from "react-bootstrap";
import "./IT.css";

export const IT = () => (
  <Container className="it-container">
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item href="solklart/#/">Hem</Breadcrumb.Item>
      <Breadcrumb.Item active>IT-support</Breadcrumb.Item>
    </Breadcrumb>
    <div className="grid-container-it">
      <Card className="cards-it">
        <Card.Header>
          <Card.Title>Felanmälan</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>Har du fel på något.. felanmälan</Card.Text>
          <Button
            href="/#/supportIT#/ "
            className="cardlink"
            variant="outline-primary"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
      <Card className="cards-it">
        <Card.Header>
          <Card.Title>Beställning</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>betäll it varor</Card.Text>
          <Button
            href="/#/order#/"
            className="cardlink"
            variant="outline-primary"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
    </div>
  </Container>
);
