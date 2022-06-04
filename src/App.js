import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AddStation from './Pages/AddStation/AddStation';
import UpdateStation from './Pages/UpdateStation/UpdateStation';
import DeleteStation from './Pages/DeleteStation/DeleteStation';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import UpdateForm from './Pages/UpdateForm/UpdateForm';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (

  <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<RequireAuth><About></About></RequireAuth>} />
      <Route path="/add" element={<AddStation></AddStation>} />
      <Route path="/update" element={<UpdateStation></UpdateStation>} />
      <Route path="/delete" element={<DeleteStation></DeleteStation>} />
      <Route path="/updateradio/:radioId" element={<UpdateForm></UpdateForm>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/registration" element={<Registration></Registration>} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  </div>
  );
}

export default App;
