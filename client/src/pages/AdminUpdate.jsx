// import React, { useEffect, useState } from 'react'
//  import { useParams } from 'react-router-dom';
//  import { useAuth } from '../store/auth';
// function AdminUpdate() {
//   const  [data, setData] = useState({
//     username:"",
//     email:"",
//     phone:"",
//   })


//    const params = useParams();
//     const {authorizationToken} = useAuth();

//   //  get single user data 
//   const getSingleUsersData =  async (id )=>{
//     const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
//       method: "GET",
//       headers: {
//         Authorization: authorizationToken || "",
//       },
//     });

//       const data  = await response.json();
//       console.log(`users  single data  : ${data}`)
//        setData(data);

//       //  if(response.ok){
//       //   getAllUsersData();
//       //  }
//   };

//    useEffect(()=>{
//     getSingleUsersData();
//    },[])
 
//    const handleInput = ()=>{
//      let name  =  e.target.name;
//      let value  = e.target.value;

//      setData({
//        ...data,
//        [name]:value,
//      })

 
//    }
 
//   return (
// <>
// <section className="section-contact">
//         <div className="contact-content container">
//           <h1 className="main-heading">Update UserData</h1>
//         </div>
//         {/* contact page main  */}
//         <div className="container grid grid-two-cols">
       

//           {/* contact form content actual  */}
//           <section className="section-form">
//             <form >
//               <div>
//                 <label htmlFor="username">username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   autoComplete="off"
//                   value={data.username}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email">email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="off"
//                   value={data.email}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="phone">phone</label>
//                 <input
//                   type="phone"
//                   name="phone"
//                   id="phone"
//                   autoComplete="off"
//                   value={data.phone}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>


//               <div>
//                 <button type="submit">Update</button>
//               </div>
//             </form>
//           </section>
//         </div>

       
//       </section>


// </>
//   )
// }

// export default AdminUpdate

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  // Get single user data
  const getSingleUsersData = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      console.log("User single data:", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getSingleUsersData(params.id);
    }
  }, [params.id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
  
    setData({
      ...data,
      [name]: value,
    })
  };

  //  to update the data 







  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken || "",
          },
          body: JSON.stringify(data),
        }
    
      );
     
 if ( response.ok){
  toast.success("User updated successfully");

 } else{
  toast.error("Failed to update user");
 }

    } catch (error) {
      console.error("not  updating user:", error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        <div className="container grid grid-two-cols">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default AdminUpdate;
