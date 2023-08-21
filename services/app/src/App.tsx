import './App.css'
import Login from '@src/metagraph/components/Login'
import { useLogin } from '@src/openbis/hooks/useLogin'
import { AuthContext } from '@src/openbis/AuthContext'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, useNavigate, Link, Outlet } from 'react-router-dom';
import Workflow from '@src/metagraph/components/Workflow';
import { Metagraph, walkGraph } from '@src/metagraph/metagraph';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import WorkflowSelection from '@src/metagraph/components/WorkflowSelection';
import { useContext, useEffect } from 'react';
import { useOperations } from './metagraph/useOperations';
import { OperationContext } from './metagraph/OperationContext';
import { useWorkflows } from './metagraph/useWorkflows';
import { useList } from './metagraph/useList';
//Add icons
library.add(fas, far)


function RequireAuth({ children }: { children: JSX.Element }) {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (!loggedIn) {
    <Navigate
      to="/login"
      replace // <-- redirect
      state={{ path: location.pathname }}
    />
  } else {
    return <>{children}</>;
  }
}




const workflows = [new Metagraph([
  {
    id: 'Select compounder',
    collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
    type: 'select',
    entityType: 'COMPOUNDER',
    dependencies: [],
    description: 'Select the compounder',
  },
  {
    id: 'Compounder Parameter',
    collection: "/COOKING/MATERIALS/WATERS",
    type: 'entry',
    entityType: 'PARAMETER_COMPOUNDER',
    dependencies: ['Select compounder'],
    description: 'Enter the parameters for the compounder',
  },
], "Create fiber", "Create fiber from compounder"),
new Metagraph([
  {
    id: 'Select fiber',
    collection: "/POLPRO_EQUIPMENT/EXTRUSION/EXTRUSION_EXP_2",
    type: 'select',
    entityType: 'FIBER',
    dependencies: [],
    description: 'Select the fiber',
  },
  {
    id: 'Fiber Parameter',
    collection: "/COOKING/MATERIALS/WATERS",
    type: 'entry',
    entityType: 'PARAMETER_FIBER',
    dependencies: ['Select fiber'],
    description: 'Enter the parameters for the fiber',
  },
], "Create another fiber", "Create fiber from fiber"),
];


function CounterComponent() {
  // Initialize the list with numbers from 1 to 10
  const initialData = Array.from({ length: 10 }, (_, index) => index + 1);

  // Use the useList hook to manage the list of numbers
  const { elem, next, previous, finished, add, idx, list, clear } = useList(initialData);

  return (
    <div>
      <div>Current Number: {elem}</div>
      <div>Index: {idx}</div>
      <button onClick={previous} disabled={idx === 0}>Previous</button>
      <button onClick={next} disabled={idx === list.length - 1}>Next</button>
      <button onClick={() => add(elem + 1)} disabled={idx < list.length - 1}>Add next number</button>
      <button onClick={clear}>Clear</button>
      {finished && <div>Finished</div>}
    </div>
  );
}



function App() {
  const ob = useLogin()
  const ops = useOperations();

  return (
    <>
    {/* <CounterComponent></CounterComponent> */}
      <Router>
        <AuthContext.Provider value={ob}>
        <OperationContext.Provider value={ops}>
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
          </OperationContext.Provider>
        </AuthContext.Provider>
      </Router>
    </>
  )
}

export default App
