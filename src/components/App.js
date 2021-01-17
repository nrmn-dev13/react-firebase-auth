import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import {Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/authContext'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" 
    style={{ minHeight: "100vh"}}
    >
        <div className="w-100" style={{ maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <PrivateRoute path='/update-profile' component={UpdateProfile} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>          
        </div>
      </Container>
  );
}

export default App;
