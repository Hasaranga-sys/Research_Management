import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const AddFile = () => {

    const history = useNavigate();
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [pdf,setPdf] = useState("");

    const upload = async (e) =>{
        try {
            e.preventDefault();

            const data =  new FormData();
            data.append("name", name);

            for(var x=0; x < file.length; x++){
                data.append("uploaded_Image", file[x]);
            }

            for(var x = 0; x < pdf.length; x++){
                data.append("uploaded_Image", pdf[x]);
            }

            const res = await fetch(`http://localhost:5000/user`,{
                method:"POST",
                body : data
            });
            if(res.ok){
                setName("");
                setFile(null);
                setPdf(null);

                // history.replace("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
        {
            <form onSubmit={upload} encType="multipart/form-data">
                <div className='form-group'>
                    <input type="text"placeholder='Name' value={name} required
                            onChange={e=>{setName(e.target.value)}}
                            className="form-control" />
                </div>
                Upload Photo
                <div className='form-group'>
                    <input type="file" multiple required filename="uploaded_Image"
                        className="form-control-file" 
                        onChange={e => {setFile(e.target.files)}} />
                </div>
                Upload pdf
                <div className='form-group'>
                    <input type="file" multiple required filename="uploaded_Image"
                            className="form-control-file"
                             onChange={e=>{setPdf(e.target.files)}} />
                </div>
                <button className='mt-2'
                        type="submit"
                        varient="primary" size="lg">Upload</button>
            </form>
        }

    </div>
  )
}

export default AddFile