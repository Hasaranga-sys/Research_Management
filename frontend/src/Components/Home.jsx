import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/fileUploadHome">
      <button className='btn btn-primary' variant="contained">file upload home</button>   
      </Link>

      <Link to="/fileAdd">
      <button className='btn btn-primary' variant="contained">add files</button>   
      </Link>
      </div>
  )
}
