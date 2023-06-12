import React from "react"; // , { useEffect, useState }
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";
import Login from "./Login/containers/login-container";

import HomeList from "./Home/containers/home-list";

import actividadList from "./Actividad/containers/actividad-list";

import { signOut } from "./Utils/auth";
import areaList from "./Area/containers/area-list";
import recursoList from "./Recurso/containers/recurso-list";
import puestoList from "./Puesto/containers/puesto-list";
import colaboradorList from "./Colaborador/containers/colaborador-list";
import objetivoList from "./Objetivo/containers/objetivo-list";

function App() {
  const logingOut = async () => {
    /* Esta funcion es para autenticación con AWS Cognito utilizando API Gateway     
    await Auth.signOut();
    */
    await signOut();
    window.location.href = "/";
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={logingOut} />
        <Route exact path="/actividad" component={actividadList} />
        <Route exact path="/area" component={areaList} />
        <Route exact path="/colaborador" component={colaboradorList} />

        <Route exact path="/recurso" component={recursoList} />
        <Route exact path="/puesto" component={puestoList} />
        <Route exact path="/objetivo" component={objetivoList} />

        <ProtectedRoute exact path="/home" component={HomeList} />
      </Switch>
    </Router>
  );
}

//export default withAuthenticator(App, true);
export default App;
