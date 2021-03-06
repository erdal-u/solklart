import React from "react";
import { Card, Container, Breadcrumb, Button } from "react-bootstrap";
import "../../App.css";

export const Salary = () => (
  <Container>
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item href="/#/">Hem</Breadcrumb.Item>
      <Breadcrumb.Item active>Lön</Breadcrumb.Item>
    </Breadcrumb>
    <div className="grid-container-economy">
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Ändring/ Rättelse</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>intyg på arbetsplats.</Card.Text>
          <Button
            href="/solklart/#/case"
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Frånvaro</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och p ensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button
            href="/solklart/#/absence"
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>

      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Arvode / Uppdrag</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>text text text</Card.Text>
          <Button
            href="/solklart/#/missonfee"
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
    </div>
    <div className="grid-container-economy">
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Självservice</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button
            href="/solklart/#/selfservice"
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title> Schema/ Bemanning</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button
            href="/solklart/#/schema"
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title> Intyg</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button
            href="/solklart/#/certificate"
            className="cardlink"
            variant="outline-primary"
          >
            Gå till ärende
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title> Övriga ärenden</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Om inget ovan passar kan du välja nedan, Då kan lösningstiden bli
            längre
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Container>
);
