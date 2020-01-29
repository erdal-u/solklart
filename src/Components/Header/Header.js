import React from "react";
import "../../App.css";
import { Route } from "react-router-dom";
import { Economy } from "../Economy";
import { IT } from "../IT/IT";
import { Salary } from "../Salary/Salary";

import { Layout } from "../Layout";
import { NavigationBar } from "../NavigationBar";
import { Mycases } from "../Mycases";
import { Case } from "../Salary/Case";
import { Blanketter } from "../Blanketter";
import { Absence } from "../Salary/Absence";
import { Missonfee } from "../Salary/Missonfee";
import { Schema } from "../Salary/Schema";
import { Certificate } from "../Salary/Certificate";
import { Selfservice } from "../Salary/Selfservice";
import { SupportIT } from "../IT/SupportIT";
import Order from "../IT/Order";
import { Solklart } from "../Solklart";

function Header() {
  return (
    <div>
      <Layout>
        <NavigationBar />
        <>
          <Route exact path="/" component={Solklart} />
          <Route path="/economy" component={Economy} />
          <Route path="/it" component={IT} />
          <Route path="/salary" component={Salary} />
          <Route path="/mycases" component={Mycases} />
          <Route path="/solkart/blanketter" component={Blanketter} />
          <Route path="/case" component={Case} />
          <Route path="/absence" component={Absence} />
          <Route path="/missonfee" component={Missonfee} />
          <Route path="/selfservice" component={Selfservice} />
          <Route path="/schema" component={Schema} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/supportit" component={SupportIT} />
          <Route path="/blanketter" component={Blanketter} />
          <Route path="/order" component={Order} />
        </>
      </Layout>
    </div>
  );
}

export default Header;
