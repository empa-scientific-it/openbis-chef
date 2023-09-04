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
  new Metagraph(
    [
      {
        id: "Select compounder",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
        type: "select",
        entityType: "COMPOUNDERS",
        dependencies: [],
        description: "Select the compounder",
      },
      {
        id: "Compounder Parameter",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
        type: "entry",
        entityType: "PARAMETER_COMPOUNDER",
        dependencies: ["Select compounder"],
        description: "Enter the parameters for the compounder",
      },
      {
        id: "Select godet",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_4",
        type: "select",
        entityType: "GODET",
        dependencies: [],
        description: "Select the godet",
      },
      {
        id: "Godet parameter",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_4",
        type: "entry",
        entityType: "PARAMETER_GODET",
        dependencies: ["Select godet"],
        description: "Enter the parameters for the godet",
      },
      {
        id: "Expreiment",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_4",
        type: "entry",
        entityType: "ENTRY",
        dependencies: ["Godet parameter", "Compounder Parameter"],
        description: "Finish the cretion of the fiber",
      }
    ],
    "Create fiber",
    "Create fiber",
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
