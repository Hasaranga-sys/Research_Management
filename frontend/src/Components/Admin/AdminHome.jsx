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
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://github.com/Hasaranga-sys/client/blob/master/img/networking.png?raw=true" alt="Card image cap"/>
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
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://github.com/Hasaranga-sys/client/blob/master/img/profile.png?raw=true" alt="Card image cap"/>
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
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://icon-library.com/images/documents-icon/documents-icon-16.jpg" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/AdminHome/UploadDocumentTemplates">
                                <button className='btn btn-primary' variant="contained">Upload Document Template</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className=" shadow card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://visualpharm.com/assets/998/Add%20User%20Group%20Man%20Man-595b40b65ba036ed117d36fa.svg" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/AdminHome/ViewProjectGroups">
                                <button className='btn btn-primary' variant="contained">Allocate Panel Members</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div style={{height: 190}} className=" shadow card text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://visualpharm.com/assets/998/Add%20User%20Group%20Man%20Man-595b40b65ba036ed117d36fa.svg" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/AdminHome/SubmissionTypeTable">
                                <button className='btn btn-primary' variant="contained">Create Submission Types</button>
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