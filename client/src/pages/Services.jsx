// import React from 'react'
// import { useAuth } from '../store/auth'
 
// function Service() {

//  const {services} = useAuth();


//   return (

//   <section className='section-services'>
//     <div className='container'>
//       <h1 className='main-heading'> Services</h1>
//     </div>
    
//     <div className="container grid-three-cols grid">
     
//      {
//       services.map((curElem,index)=>{
//         const {price, description, provider,  service} = curElem;
//   return(
//         <div className="card">
//         <div className="card-img">
//           <img src="/images/design.png" alt="our Services" width="150"/>
//         </div>
//         <div className="card-detaills">
//           <div className="grid grid-two-cols">
//             <p>{provider}</p>
//             <p>{price}</p>
//           </div>
//           <h2 className='service-head'>{service}</h2>
//           <p>{description}</p>
//         </div>
//        </div>
//   )
//       })


//      }


  
//     </div>
//   </section>

 
//   )
// }

// export default Service


import React from 'react';
import { useAuth } from '../store/auth';

function Service() {
  const { services } = useAuth();

  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-heading">Our Services</h1>
      </div>

      <div className="services-grid">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;

          return (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src="/images/design.png" alt={`${service} Service`} />
              </div>

              <div className="service-content">
                <div className="service-meta">
                  <span>{provider}</span>
                  <span>{price}</span>
                </div>

                <h2 className="service-title">{service}</h2>
                <p className="service-description">{description}</p>

                <div className="service-action">
                  <button className="service-button">Explore</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
