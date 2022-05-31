import React, { useEffect, useState } from 'react'

const PresentationEvaluation = () => {

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
    <div className='container'>

      <h1>Presentation Evaluation</h1>

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

    </div>
  )
}

export default PresentationEvaluation