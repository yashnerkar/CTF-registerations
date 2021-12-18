import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Admin from "./components/Admin";

function App() {
  const [register, setRegister] = useState({
    group: "",
    gmail: "",
    firstMember: "",
    secondMember: "",
    thirdMember: "",
    password: "",

  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setRegister(() => {
      return {
        ...register,
        [name]: value,
      };
    });
  };
  const [alert, setAlert] = useState({
    color: null,
    text: null,
    message: null,
    display: 'none',
  });
  const showAlert = (res) => {
    const show = res.split(":");
    setAlert({
      color: show[0],
      text: show[1],
      message: show[2],
      display: 'block',
    });
    setTimeout(() => {
      setAlert({
        color: null,
        text: null,
        message: null,
        display: 'none',
      });
    }, 5000);
  };
  return (
    <div>
      <Router>
        <Alert color={alert.color} text={alert.text} message={alert.message} display={alert.display} />{" "}
        <Switch>
          <Route exact path="/CTF-admin" component={Admin} />{" "}
          <Route exact path="/register">
            <Register
              setRegister={setRegister}
              onChange={onChange}
              group={register.group}
              firstMember={register.firstMember}
              secondMember={register.secondMember}
              thirdMember={register.thirdMember}
              password={register.password}
              gmail={register.gmail}
              showAlert={showAlert}
            />{" "}
          </Route>{" "}
          <Route exact path="/">
            <Home />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
