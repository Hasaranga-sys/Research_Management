import React from 'react'
import { Link } from 'react-router-dom';

const StudentGroupHome = () => {
  return (
    <div>
        <div className='shadow card w-75 mx-auto text-center mt-5 bg-light'>
        <h2 className='mt-4'>Student Group Management</h2>
            <div className="py-5">
                <div className="container">
                    <div className="row hidden-md-up">

                    <div style={{marginLeft:260}} className="col-md-3">
                        <div style={{height: 190}} className="card shadow text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome/StudentGroupsTable">
                            <button className='btn btn-primary' variant="contained">View Registerd Groups</button>   
                            </Link>             
                            
                            </div>
                        </div>
                    </div>

                    <div className="mx-4 col-md-3">
                        <div style={{height: 190}} className="card shadow-lg text-center">
                            <div className="card-block">
                            <img style={{height: 130, width: 130}} className="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 className="card-title"></h4>
                            <Link to="/StudentHome/StudentGroupHome/AddStudentGroup">
                                <button className='btn btn-primary' variant="contained">Register Student Group</button>
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

export default StudentGroupHome