import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Economy } from "./Components/Economy";
import { IT } from "./Components/IT/IT";
import { Salary } from "./Components/Salary/Salary";
import { NoMatch } from "./Components/NoMatch";

import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Mycases } from "./Components/Mycases";
import { Case } from "./Components/Salary/Case";
import { Blanketter } from "./Components/Blanketter";
import { Absence } from "./Components/Salary/Absence";
import { Missonfee } from "./Components/Salary/Missonfee";
import { Schema } from "./Components/Salary/Schema";
import { Certificate } from "./Components/Salary/Certificate";
import { Selfservice } from "./Components/Salary/Selfservice";
import { SupportIT } from "./Components/IT/SupportIT";
import Order from "./Components/IT/Order";
import { Solklart } from "./Components/Solklart";
import history from "./Components/history";

function App() {
  return (
    <div>
      <React.Fragment>
        <HashRouter history={history}>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route path="/solklart" component={Solklart} />
              <Route path="/economy" component={Economy} />
              <Route path="/it" component={IT} />
              <Route path="/salary" component={Salary} />
              <Route path="/mycases" component={Mycases} />
              <Route path="/blanketter" component={Blanketter} />
              <Route path="/case" component={Case} />
              <Route path="/absence" component={Absence} />
              <Route path="/missonfee" component={Missonfee} />
              <Route path="/selfservice" component={Selfservice} />
              <Route path="/schema" component={Schema} />
              <Route path="/certificate" component={Certificate} />
              <Route path="/supportit" component={SupportIT} />
              <Route path="/order" component={Order} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
