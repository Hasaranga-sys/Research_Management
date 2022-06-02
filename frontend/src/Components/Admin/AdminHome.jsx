import React from 'react'
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
         <div>
        <div className='card w-75 mx-auto bg-light text-center mt-5'>
        <h2>Welcome Admin</h2>
            <div className="py-5">
                <div className="container">
                    <div className="row hidden-md-up">

                    <div className="col-md-3">
                        <div style={{height: 190}} className="shadow card text-center">
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
                        <div style={{height: 190}} className=" shadow card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupsTable">
                                <button className='btn btn-primary' variant="contained">User Settings</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className=" shadow card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/AdminHome/UploadDocumentTemplates">
                                <button className='btn btn-primary' variant="contained">Upload Document Template</button>
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

export default AdminHome