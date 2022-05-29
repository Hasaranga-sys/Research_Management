import React from 'react'
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
         <div>
        <div className='bg-light'>
        <h2>Welcome Admin</h2>
            <div className="py-5">
                <div className="container">
                    <div className="row hidden-md-up">

                    <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/AdminHome/ViewStudentGroups">
                            <button className='btn btn-primary' variant="contained">View Student Groups</button>   
                            </Link>             
                            
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupsTable">
                                <button className='btn btn-primary' variant="contained">User Settings</button>
                            </Link>
                                              
                            
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-3">
                        <div style={{height: 190}} className="card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Rquest a Supervisor</button>                
                            
                            </div>
                        </div>
                    </div> */}
                    
                    </div>
                </div>
            </div>       
     </div>
    </div>
    </div>
  )
}

export default AdminHome