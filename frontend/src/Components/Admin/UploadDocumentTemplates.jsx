import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const UploadDocumentTemplates = () => {

    const history = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    // const [file, setFile] = useState("");
    const [pdf,setPdf] = useState("");


    const upload = async (e) =>{
        try {
            e.preventDefault();

            const data =  new FormData();
            data.append("name", name);
            data.append("type", type);

            // for(var x=0; x < file.length; x++){
            //     data.append("uploaded_Image", file[x]);
            // }

            for(var x = 0; x < pdf.length; x++){
                data.append("uploaded_Image", pdf[x]);
            }

            const res = await fetch(`http://localhost:5000/pdf`,{
                method:"POST",
                body : data
            });
            if(res.ok){
                setName("");
                // setType("");
                // setFile(null);
                setPdf(null);

                // history("/");
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='shadow bg-light card text-center p-4 w-50 mt-5  mx-auto'>
        <h2>Upload Document Template</h2>
        <div style={{ maxWidth: 500, margin: "auto" }}>
       
        {
            <form onSubmit={upload} encType="multipart/form-data">
                <div className='form-group '>
                    <input type="text"placeholder='Name' value={name} required
                            onChange={e=>{setName(e.target.value)}}
                            className="form-control" />
                </div>
                <br></br>



                <div className='form-group'>
                        <select className="form-select" 
                        aria-label="Default select example"  
                        onChange={(e) => setType(e.target.value)}
                        value={type}  required>

                        <option placeholder='select Document Type' selected> </option>
                                <option value="Document Template">Document Template</option>
                                <option value="Presentation Template">Presentation Template</option>
                                <option value="Marking Scheme">Marking Scheme</option>
                            
                        </select>
                </div>
               
                Upload pdf
                <div className='form-group'>
                    <input type="file" multiple required filename="uploaded_Image"
                            className="form-control"
                             onChange={e=>{setPdf(e.target.files)}} />
                </div>
                <button className='btn btn-primary mt-3'
                        type="submit"
                        varient="primary" size="lg">Upload</button>
            </form>
        }

    </div>  
    <Link to="/fileUploadHome">
      <button className='btn btn-primary' variant="contained">file upload home</button>   
      </Link>      
    </div>
  )
}

export default UploadDocumentTemplates