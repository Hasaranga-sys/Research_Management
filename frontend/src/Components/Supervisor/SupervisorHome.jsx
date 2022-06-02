import React from 'react'
import { Link } from 'react-router-dom';

const SupervisorHome = () => {
  return (
    <div>

      <div className='card shadow w-75 mt-5 text-center mx-auto bg-light'>
        <h2 className='mt-2'>Supervisor Home</h2>
            <div className="py-5">
                <div className="border container w-100">
                    <div  className="row ">
          

                    <div className="col-md-3 mx-auto">
                        <div style={{height: 190}} className="card shadow text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/SupervisorHome/TopicView">
                            <button className='btn btn-primary' variant="contained">View Research Topics</button>   
                            </Link>             
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mx-auto">
                        <div style={{height: 190}} className="card shadow text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/SupervisorHome/DocumentEvaluation">
                                <button className='btn btn-primary' variant="contained">Documents Evaluation</button>
                            </Link>
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

export default SupervisorHome