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
library.add(fas, far)


function RequireAuth({ children }: { children: JSX.Element }) {
  let {loggedIn} = useLogin();
  let location = useLocation();
  let navigate = useNavigate();
  if (!loggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="login" state={{ from: location }} replace />;
  }

  return children;
}



const metagraph = new Metagraph([
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
]);



function App() {
  const ob = useLogin()
  return (
    <>
      <Router>
        <AuthContext.Provider value={ob}>
          <Routes>
            <Route path="login" element={<Login />} />
              <Route
                index
                element={
                  //<RequireAuth>
                    <Workflow metagraph={metagraph} />
                  //</RequireAuth>
                }
              />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </>
  )
}

export default App
