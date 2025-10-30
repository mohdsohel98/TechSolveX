import React from "react";
import { NavLink, Outlet ,Navigate} from "react-router-dom";
import { ImUsers } from "react-icons/im";
import { LuContactRound } from "react-icons/lu";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { useAuth } from "../../store/auth";
const AdminLayout = () => {
   const {user,isLoading} = useAuth();
    console.log("adminlayout ", user)

   if(isLoading){
    return <h1>Loadin..</h1>
   }

     if (!user.isAdmin) {
      return <Navigate to="/" />
     }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><ImUsers />Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"> <LuContactRound />Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/admin/services"> <RiCustomerServiceFill />Services</NavLink>
              </li>
              <li>
                <NavLink to="/admin/home"> <IoHome /> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default AdminLayout;

