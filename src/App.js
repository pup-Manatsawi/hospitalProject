// import { useState } from 'react';
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./containers/pages/NotFound/NotFound";
import Login from "./containers/pages/Login/Login";
import LocalStorageService from "./services/localStorage";
import { useState } from "react";
import InputHN from "./containers/pages/InputHN/InputHN";
import FifthState from "./containers/pages/FifthState/FifthState";
import FirstState from "./containers/pages/FirstState/FirstState";
import FourthStateEars from "./containers/pages/FourthStateEars/FourthStateEars";
import FourthStateEyes from "./containers/pages/FourthStateEyes/FourthStateEyes";
import FourthStateLungs from "./containers/pages/FourthStateLungs/FourthStateLungs";
import SecondState from "./containers/pages/SecondState/SecondState";
import ThirdState from "./containers/pages/ThirdState/ThirdState";
import Profile from "./containers/pages/Profile/Profile";

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());
  const [inputHN, setInputHN] = useState("");

  return (
    <div className="App">
      <Switch>
        {(() => {
          switch (role) {
            case "user":
              return !inputHN
                ? [
                    <Route key={1} exact path="/">
                      <InputHN inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Redirect key={-1} to="/" />,
                  ]
                : [
                    <Route key={1} exact path="/">
                      <InputHN inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Route key={2} exact path="/first-state">
                      <FirstState inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Route key={3} exact path="/second-state">
                      <SecondState inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Route key={4} exact path="/third-state">
                      <ThirdState inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Route key={5} exact path="/fourth-state-eyes">
                      <FourthStateEyes
                        inputHN={inputHN}
                        setInputHN={setInputHN}
                      />
                    </Route>,
                    <Route key={6} exact path="/fourth-state-ears">
                      <FourthStateEars
                        inputHN={inputHN}
                        setInputHN={setInputHN}
                      />
                    </Route>,
                    <Route key={7} exact path="/fourth-state-lungs">
                      <FourthStateLungs
                        inputHN={inputHN}
                        setInputHN={setInputHN}
                      />
                    </Route>,
                    <Route key={8} exact path="/fifth-state">
                      <FifthState inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Route key={9} exact path="/profile">
                      <Profile inputHN={inputHN} setInputHN={setInputHN} />
                    </Route>,
                    <Redirect key={-1} to="/" />,
                  ];
            default:
              return [
                <Route key={1} exact path="/login">
                  <Login setRole={setRole} />
                </Route>,
                <Redirect key={-1} to="/login" />,
              ];
          }
        })()}
      </Switch>
    </div>
  );
}

export default App;
