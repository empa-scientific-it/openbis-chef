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
import PopupDemo from "./notification/components/PopupDemo";
import { NotificationContext } from "./notification/NotificationContext";
import { useNotification } from "./notification/hooks/useNotification";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { checkSession } = useContext(AuthContext);
  const location = useLocation();

  const [checked, setChecked] = useState(true);
  useEffect(() => {
    console.log("Auth check");
    async function check() {
      console.log("Auth check");
      const res = await checkSession();
      console.log("The user is logged in: ", res);
      setChecked(res);
    }
    check();
  }, []);

  if (!checked) {
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
  const notification = useNotification();

  return (
    <>
      {/* <CounterComponent></CounterComponent> */}
      <Router>
        <NotificationContext.Provider value={notification}>
          <AuthContext.Provider value={openbisContext}>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route
                path="/main"
                element={
                  <RequireAuth>
                    <Workflow workflows={workflows} />
                  </RequireAuth>
                }
              />
              <Route path="demo" element={<Demo metagraph={pizzaWorkflow} />} />
              <Route path="sampledemo" element={<SampleGraphDemo />} />
              <Route path="stepper" element={<StepperDemo />} />
              <Route path="popup" element={<PopupDemo />} />
            </Routes>
          </AuthContext.Provider>
        </NotificationContext.Provider>
      </Router>

    </>
  );
};

export default App;
