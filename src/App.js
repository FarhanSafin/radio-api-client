import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AddStation from './Pages/AddStation/AddStation';
import UpdateStation from './Pages/UpdateStation/UpdateStation';
import DeleteStation from './Pages/DeleteStation/DeleteStation';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';

function App() {
  return (

  <div>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddStation></AddStation>} />
        <Route path="/update" element={<UpdateStation></UpdateStation>} />
        <Route path="/delete" element={<DeleteStation></DeleteStation>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />
      </Routes>
  </div>

  );
}

export default App;
