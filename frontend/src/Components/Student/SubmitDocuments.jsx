import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const SubmitDocuments = () => {

    const history = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const [pdf,setPdf] = useState("");

    const upload = async (e) =>{
        try {
            e.preventDefault();

            const data =  new FormData();
            data.append("name", name);
            data.append("type", type);


            for(var x = 0; x < pdf.length; x++){
                data.append("uploaded_Image", pdf[x]);
            }

            const res = await fetch(`http://localhost:5000/pdf`,{
                method:"POST",
                body : data
            });
            if(res.ok){
                setName("");
                setType("");
              
                setPdf(null);

                history("/StudentHome");
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div style={{marginTop: 30,width:550}} className='shadow bg-light card text-center p-3  mx-auto'>
        <h1>Submit Documents</h1>
        <div style={{ maxWidth: 500, margin: "auto" }}>
        <Link to="/fileUploadHome">
      <button className='btn btn-primary' variant="contained">file upload home</button>   
      </Link>
        {
            <form onSubmit={upload} encType="multipart/form-data">
                <div className='form-group'>

                    <input type="text"placeholder='Group ID' value={name} required onChange={e=>{setName(e.target.value)}}
                            className="form-control" />
                </div>
                <br></br>
                
                <div className='form-group'>
                        <select className="form-select" 
                        aria-label="Default select example"  
                        onChange={(e) => setType(e.target.value)}
                        value={type}  required>

                        <option selected> </option>
                                <option value="Topic Details Document">Topic Details Document</option>
                                <option value="Evaluation 1">Evaluation 1</option>
                                <option value="Evaluation 2">Evaluation 2</option>
                                <option value="Presentation 1">Presentation 1</option>
                                <option value="Presentation 2">Presentation 2</option>
                                <option value="Final Thesis">Final Thesis</option>
                            
                        </select>

                </div>
             
                Upload pdf
                <div className='form-group'>
                    <input type="file" multiple required filename="uploaded_Image"
                            className="form-control"
                             onChange={e=>{setPdf(e.target.files)}} />
                </div>
                <button className='btn btn-primary my-3 ' type="submit" >Upload</button>
            </form>
        }

    </div>
    </div>
  )
}

export default SubmitDocuments