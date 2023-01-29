import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import UserDetails from './Components/ProfilePage';
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from './Components/ProtectedRoute';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  console.log("Rendering");
  
  console.log(JSON.parse(localStorage.getItem('isLoggedIn')));

  return (<div>
      <NavBar />
      <Routes>
        {/* <Route exact path="/" element={JSON.parse(localStorage.getItem('isLoggedIn')) ? <UserDetails/> : <Login />} /> */}
        <Route element={<PrivateRoutes/>}>
              <Route path='/userDetails' element={<UserDetails />} />
              <Route exact path="/" element={<UserDetails />} />
          </Route>
      </Routes>
  </div>
  );
}

export default App;
