import React from 'react'
import { Link } from 'react-router-dom';

const StudentHome = () => {
  return (
      <div>
          <div className='row'>
            
    <div className='card shadow bg-light w-75 mx-auto mt-5 text-center '>
        <h2>Welcome</h2>
            <div className="py-5">
                <div className="container">
                    <div className="row hidden-md-up">

                    <div className="col-md-3">
                        <div style={{height: 190}} className="shadow card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/TopicRegisterTable">
                            <button className='btn btn-primary' variant="contained">Register Topics</button>   
                            </Link>             
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome">
                                <button className='btn btn-primary' variant="contained">Student Groups</button>
                            </Link>
                                              
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome/GetTemplates">
                                <button className='btn btn-primary' variant="contained">Get Templates</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome/SubmitDocuments">
                                <button className='btn btn-primary' variant="contained">Submit Documents</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mt-5">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome/SubmitDocuments">
                                <button className='btn btn-primary' variant="contained">Submit Topic Document</button>
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

export default StudentHome