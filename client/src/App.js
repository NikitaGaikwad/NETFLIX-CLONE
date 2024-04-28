import Login from './pages/login/Login'
import './app.scss'
import Home from "./pages/home/Home";
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,

} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext} from './authContext/AuthContext'



function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />}></Route>
        <Route path='/login' element={!user ? <Login /> : <Home />}></Route>
        <Route path='/register' element={!user ? <Register /> : <Home />}></Route>
        {user && (
          <>
            <Route path='/movies' element={<Home type="movie" />}></Route>
            <Route path='/series' element={<Home type="series" />}></Route>
            <Route path='/watch' element={<Watch />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
