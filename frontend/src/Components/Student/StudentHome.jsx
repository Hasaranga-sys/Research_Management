import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const StudentHome = () => {
  return (
    <div className='bg-light'>
        <h2>Welcome</h2>
            <div class="py-5">
                <div class="container">
                    <div class="row hidden-md-up">

                    <div class="col-md-3">
                        <div style={{height: 190}} class="card text-center">
                            <div class="card-block">
                            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 class="card-title"></h4>
                            <Link to="/StudentHome/TopicRegisterTable">
                            <button className='btn btn-primary' variant="contained">Register Topics</button>   
                            </Link>             
                            
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div style={{height: 190}} class="card text-center">
                            <div class="card-block">
                            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 class="card-title"></h4>
                            <button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Create Student Groups</button>                
                            
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div style={{height: 190}} class="card text-center">
                            <div class="card-block">
                            <img style={{height: 130, width: 130}} class="card-img-top" src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png" alt="Card image cap"/>
                            <h4 class="card-title"></h4>
                            <button style={{color:"white"}} LinkComponent={Link} to="/" variant="contained">Rquest a Supervisor</button>                
                            
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