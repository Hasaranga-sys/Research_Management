import React, { useEffect, useState } from 'react'

const FileUploadH = () => {
    const [filers, setFilers] = useState();

    useEffect(()=>{
        const fetchFilers = async () =>{
            const res = await fetch(`http://localhost:5000/filer`);
            const data = await res.json();
            setFilers(data);
        };
        fetchFilers();        
    },[])



  return (
    <div className='row'>
        <h1>hello</h1>
       {
           filers?.map((file)=>(
            <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={file._id}>
                <img src={file.avatar} alt="" width={"100%"} height={200} />

                <a href={file.pdf} download> Click to download</a>
                <div className='p-2'>
                    <h3>{file.name}</h3>
                </div>
            </div>
           ))
           }
    </div>
  )
}

export default FileUploadH