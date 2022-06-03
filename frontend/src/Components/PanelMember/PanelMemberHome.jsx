import React from 'react'
import { Link } from 'react-router-dom';

const PanelMemberHome = () => {
  return (
    <div>
    <div>
   <div style={{width:900}} className='card mt-5 shadow-lg mx-auto bg-light text-center'>
   <h2 className='mt-4'>Welcome Panel Member</h2>
       <div className="py-5">
           <div className="container">
               <div className="row hidden-md-up">
                   
                   <div className="col-md-3">
                   <div style={{height: 190, width:240, marginLeft:140}} className="shadow-lg card text-center">
                       <div className="card-block">
                       <img style={{height: 130, width: 130}} className="card-img-top" src="https://visualpharm.com/assets/71/Report%20Card-595b40b85ba036ed117da242.svg" alt="Card image cap"/>
                       <h4 className="card-title"></h4>
                       <Link to="/panelMemberHome/TopicEvaluation">
                       <button className='btn btn-primary' variant="contained">Evaluate Topics</button>   
                       </Link>             
                       
                       </div>
                   </div>
               </div>

               <div className="col-md-3">
                   <div style={{height: 190, width:240, marginLeft:230}} className="shadow-lg card text-center">
                       <div className="card-block">
                       <img style={{height: 130, width: 130}} className="card-img-top" src="https://visualpharm.com/assets/157/Presentation-595b40b65ba036ed117d4535.svg" alt="Card image cap"/>
                       <h4 className="card-title"></h4>
                       <Link to="/panelMemberHome/PresentationEvaluation">
                           <button className='btn btn-primary' variant="contained">Evaluate Presentations</button>
                       </Link>
                       </div>
                   </div>
               </div>
                
            
               
               
               </div>
           </div>
       </div>       
</div>
</div>
</div>
  )
}

export default PanelMemberHome