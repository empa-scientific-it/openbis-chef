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
  Link,
  Outlet,
} from "react-router-dom";
import Workflow from "@src/metagraph/components/Workflow";
import { Metagraph, walkGraph } from "@src/metagraph/metagraph";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import WorkflowSelection from "@src/metagraph/components/WorkflowSelection";
import { useContext, useEffect } from "react";
import { useOperations } from "./metagraph/useOperations";
import { OperationContext } from "./metagraph/OperationContext";
import { useWorkflows } from "./metagraph/useWorkflows";
import { useList } from "./metagraph/useList";
//Add icons
library.add(fas, far);

function RequireAuth({ children }: { children: JSX.Element }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
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
  new Metagraph(
    [
      {
        id: "Select compounder",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
        type: "select",
        entityType: "COMPOUNDER",
        dependencies: [],
        description: "Select the compounder",
      },
      {
        id: "Compounder Parameter",
        collection: "/COOKING/MATERIALS/WATERS",
        type: "entry",
        entityType: "PARAMETER_COMPOUNDER",
        dependencies: ["Select compounder"],
        description: "Enter the parameters for the compounder",
      },
    ],
    "Create fiber",
    "Create fiber from compounder",
  ),
  new Metagraph(
    [
      {
        id: "Select godet",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_4",
        type: "select",
        entityType: "GODET",
        dependencies: [],
        description: "Select the godet",
      },
      {
        id: "Fiber Parameter",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
        type: "entry",
        entityType: "PARAMETER_GODET",
        dependencies: ["Select godet"],
        description: "Enter the parameters for the godet",
      },
    ],
    "Create another fiber",
    "Create fiber from fiber",
  ),
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
          </Routes>
        </AuthContext.Provider>
      </Router>
    </>
  );
};

export default App;
