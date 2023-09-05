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
        id: "Select extruder",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_1",
        type: "select",
        entityType: "EXTRUDER",
        dependencies: [],
        description: "Select the extruder",
      },
      {
        id: "Extruder Parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_EXTRUDER",
        dependencies: ["Select extruder"],
        description: "Enter the parameters for the extruder",
      },
      {
        id: "Select spin pack",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_8",
        type: "select",
        entityType: "SPIN_PACK",
        dependencies: [],
        description: "Select the spin pack",
      },
      {
        id: "Spin pack parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_SPIN_PACK",
        dependencies: ["Select spin pack"],
        description: "Enter the parameters for the spin pack",
      },
      {
        id: "Select die",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_2",
        type: "select",
        entityType: "DIES",
        dependencies: [],
        description: "Select the die",
      },
      {
        id: "Die parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_DIES",
        dependencies: ["Select die"],
        description: "Enter the parameters for the die",
      },
      {
        id: "Select quencher",
        collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUDER_EXP_7",
        type: "select",
        entityType: "QUENCHERS",
        dependencies: [],
        description: "Select the quencher",
      },
      {
        id: "Quencher parameter",
        collection: "/POLPRO_RUDOLF.HUFENUS_AT_EMPA.CH/TEST/TEST_EXP_1",
        type: "entry",
        entityType: "PARAMETER_QUENCHER",
        dependencies: ["Select quencher"],
        description: "Enter the parameters for the die",
      },
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
