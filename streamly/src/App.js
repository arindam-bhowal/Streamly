import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UpdateUser from './pages/updateUser/UpdateUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/update" element={<UpdateUser />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
