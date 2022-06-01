import React, { useEffect, useState } from 'react'

const GetTemplates = () => {

  const [pdfs, setPdf] = useState();
  const [search, setSearch] = useState("Template");

  useEffect(()=>{
      const fetchFilers = async () =>{
          const res = await fetch(`http://localhost:5000/pdf`);
          const data = await res.json();
          setPdf(data);
      };
      fetchFilers();        
  },[]);

  return (
    <div style={{marginTop: 30,}} className='container'>
      <h1 className='text-center'>Get Templates</h1>

<div>
          <div style={{marginTop: 30,}} className='container'>
            <div className='row'>
            <div className='shadow card col-md-10 p-1 offset-md-1 offset-md-1'>

                  <table className="table table-striped">
                      <thead className='table-primary'>
                        <tr>
                          <th scope="col">Document Name</th>
                          <th scope="col">Type</th>
                          <th scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {pdfs?.filter((value) => {
                                      if (search === "") {
                                        return value;
                                      } else if (
                                        //value.id.toString(includes(search))
                                        value.type.toLowerCase().includes(search.toLowerCase())
                                      ) {
                                        return value;
                                      }
                                      return 0;
              }).map((pdf)=>
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

export default GetTemplates