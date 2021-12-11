import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
function App() {
  const [register, setRegister] = useState({
    group: "",
    gmail:"",
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
    color:null,
    message:null
  });
  const showAlert = (res) => {
    const show = res.split(":");
    setAlert({
      color: show[0],
      message: show[1],
    });
    setTimeout(() => {
      setAlert({
        color: null,
        message: null,
      });
    }, 3000);
  };
  return (
    <div >
      <Router>
        <Navbar/>
        <Alert color={alert.color} message={alert.message}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
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
          />
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Switch>
    </Router>
           

    </div>
  );
}

export default App;
