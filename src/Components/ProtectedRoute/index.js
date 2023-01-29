import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login from '../Login';

const PrivateRoutes = () => {
  const navigate = useNavigate();
return (
    JSON.parse(localStorage.getItem('isLoggedIn')) ? <Outlet/> : <Login />
  )
}


export default PrivateRoutes;