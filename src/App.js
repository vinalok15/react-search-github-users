import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
//router dome 6
    
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
                  <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
   /* <AuthWrapper>
        <Router>
          <Switch>
          <PrivateRoute path='/' exact={true}>
            <Dashboard />
          </PrivateRoute>
          <Route path='/login' exact={true}>
            <Login />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
            </Switch>
          </Router>
       </AuthWrapper>*/

}
export default App;
