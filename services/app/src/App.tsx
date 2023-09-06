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
import { useContext } from "react";
import Demo from "./Demo";
import { polyproWorkflow } from "./PolyproWorkflow";
import { pizzaWorkflow } from "./PizzaWorkflow";
import SampleGraphDemo from "./SampleGraphDemo";


function RequireAuth({ children }: { children: JSX.Element }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();

  if (!loggedIn) {
    <Navigate
      to="/login"
      replace // <-- redirect
      state={{ path: location.pathname }}
    />;
  } else {
    return <>{children}</>;
  }
}

const workflows = [
  polyproWorkflow, 
  pizzaWorkflow
];

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
            <Route path="demo" element={<Demo metagraph={pizzaWorkflow}/>}/>
            <Route path="sampledemo" element={<SampleGraphDemo/>}/>
          </Routes>
        </AuthContext.Provider>
      </Router>
    </>
  );
};

export default App;
