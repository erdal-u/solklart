import React from "react";
import "../../App.css";
import { Card, Container, Breadcrumb, Button } from "react-bootstrap";

export const Selfservice = () => (
  <Container>
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item href="/">Hem</Breadcrumb.Item>
      <Breadcrumb.Item href="/salary">Lön</Breadcrumb.Item>
      <Breadcrumb.Item active>Självservice </Breadcrumb.Item>
    </Breadcrumb>
    <div className="grid-container-economy">
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Frånvaro</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            iacon ipsum dolor amet frankfurter salami landjaeger brisket ribeye
            pancetta leberkas pork chop, tongue bacon. T-bone spare ribs chicken
            biltong, pork chop tri-tip rump boudin turkey.
          </Card.Text>
          <Button
            href=""
            className="cardlink"
            variant="btn btn-secondary btn-sm"
          >
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Semesterdagar/komplementation</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Short ribs porchetta buffalo pastrami strip steak prosciutto filet
            mignon swine ball tip chuck brisket pork shank cupim alcatra.
          </Card.Text>
          <Button className="cardlink" variant="btn btn-secondary btn-sm">
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>

      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Lönespecifikation</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Short ribs porchetta buffalo pastrami strip steak prosciutto filet
            mignon swine ball tip chuck brisket pork shank cupim alcatra.
          </Card.Text>
          <Button className="cardlink" variant="btn btn-secondary btn-sm">
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>
    </div>
    <div className="grid-container-economy">
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Flextid</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button className="cardlink" variant="btn btn-secondary btn-sm">
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Skatt</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button className="cardlink" variant="btn btn-secondary btn-sm">
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>
      <Card className="cardseco">
        <Card.Header>
          <Card.Title>Beställa Intyg</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Inom Lön hanterar vi anställningar, löneutbetalningar,
            personalnyckeltal och pensioner. Varje medarbetare hos våra kunder
            har tillgång till HR Självservice där medarbetaren själv rapporterar
            och lägger in eventuella avvikelser.
          </Card.Text>
          <Button className="cardlink" variant="btn btn-secondary btn-sm">
            Fyll i formulär
          </Button>
        </Card.Body>
      </Card>
    </div>
  </Container>
);
