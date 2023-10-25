import "./App.css";
import Login from "@src/metagraph/components/Login";
import { useLogin } from "@src/openbis/hooks/useLogin";
import { AuthContext } from "@src/openbis/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Workflow from "@src/metagraph/components/Workflow";
import { Metagraph } from "@src/metagraph/metagraph";
import { useContext, useEffect, useState } from "react";
import Demo from "./Demo";
import { polyproWorkflow } from "./workflows/PolyproWorkflow";
import { pizzaWorkflow } from "./workflows/PizzaWorkflow";
import SampleGraphDemo from "./SampleGraphDemo";
import { simpleWorkflow } from "./workflows/SimpleWorkflow";
import StepperDemo from "./StepperDemo";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { checkSession } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  useEffect(() => {
    console.log("checking session");
    checkSession()
      .then((res) => {
        console.log("logged in ", loggedIn);
        setTimeout(() => setLoggedIn(res), 1000);
      })
      .catch((err) => {
        console.log("error", err);
        setLoggedIn(false);
      });
  }, []);
  if (!loggedIn) {
    console.log("redirecting");
    return (
      <Navigate
        to="/login"
        replace // <-- redirect
        state={{ path: location.pathname }}
      />
    );
  } else {
    return <>{children}</>;
  }
}

const workflows = [polyproWorkflow, pizzaWorkflow, simpleWorkflow];

const App: React.FC = () => {
  const openbisContext = useLogin();

  return (
    <>
      {/* <CounterComponent></CounterComponent> */}
      <Router>
        <AuthContext.Provider value={openbisContext}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Workflow workflows={workflows} />
                </RequireAuth>
              }
            />
            <Route path="demo" element={<Demo metagraph={pizzaWorkflow} />} />
            <Route path="sampledemo" element={<SampleGraphDemo />} />
            <Route path="stepper" element={<StepperDemo />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </>
  );
};

export default App;
