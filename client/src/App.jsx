 import {BrowserRouter, Route, Router, Routes} from "react-router-dom";



import Contact from "./pages/Contact";
import Service from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import { Logout } from "./pages/Logout";
// import AdminLayout from "./components/Layouts/AdminLayout";
import AdminLayout from './components/Layouts/AdminLayout';
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate";




const App = () => {

  return (
  <>

  <BrowserRouter>
<Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path = "/about" element={<About/>}/>
  <Route path = "/Contact" element={<Contact/>}/>
  <Route path = "/service" element={<Service/>}/>
  <Route path = "/login" element={<Login/>}/>
  <Route path = "/register" element={<Register/>}/>
  <Route path='/logout' element={<Logout/>}/>
 <Route path="*" element={<Error/>}/>

<Route path="/admin" element={<AdminLayout/>}>
 <Route path="users" element={<AdminUsers/>}/>
  <Route path="contacts" element={<AdminContacts/>}/>
   <Route path="users/:id/edit" element={<AdminUpdate/>}/>

</Route>

  </Routes>
  <Footer/>
  
  </BrowserRouter>
  </>
  )
};

export default App;
