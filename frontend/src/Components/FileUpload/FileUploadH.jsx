import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FileUploadH = () => {
    const [pdfs, setPdf] = useState();

    useEffect(()=>{
        const fetchFilers = async () =>{
            const res = await fetch(`http://localhost:5000/pdf`);
            const data = await res.json();
            setPdf(data);
        };
        fetchFilers();        
    },[]);



  return (
      <div>
          <div style={{marginTop: 20,}} className='container'>
            <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-2'>

                  <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Group Id</th>
                          <th scope="col">Type</th>
                          <th scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {pdfs?.map((pdf)=>
                          <tr key={pdf.id}>
                            <td>{pdf.name}</td>
                            <td>{pdf.type}</td>
                            <td>{ <a href={pdf.pdf} download>{pdf.name}</a>}</td>
                            
                          </tr>

                          )
                            
                          }
                        </tbody>           
                  </table>

            </div>

            </div>

        </div>
      </div>

    
    // <div className='row'>
    //     <h1>hello</h1>
    //     <Link to="/fileAdd">
    //   <button className='btn btn-primary' variant="contained">add files</button>   
    //   </Link>
    //    {pdfs?.map((pdf)=>(
    //         <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={pdf._id}>
    //             <img src={pdf.avatar} alt="" width={"100%"} height={200} />

    //             <a href={pdf.pdf} download> Click to download</a>
    //             <div className='p-2'>
    //                 <h3>{pdf.name}</h3>
    //                 <h3>{pdf.type}</h3>
    //             </div>
    //         </div>
    //        ))
    //        }
    // </div>
  )
}

export default FileUploadH