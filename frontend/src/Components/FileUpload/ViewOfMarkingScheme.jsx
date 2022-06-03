import React, { useEffect, useState } from 'react'

const ViewOfMarkingScheme = () => {
    const [pdfs, setPdf] = useState();
    const [search, setSearch] = useState("Marking Scheme");
    const [search2,setSearch2] = useState("")

    useEffect(()=>{
        const fetchFilers = async () =>{
            const res = await fetch(`http://localhost:5000/pdf`);
            const data = await res.json();
            setPdf(data);
        };
        fetchFilers();        
    },[]);
  return (
    // <div style={{width:700}} className='shadow card  mx-1 text-center p-3 mt-5 bg-light'>
    // <h2>Marking Schemes</h2>

    <div>
      <div className="container">
      <input type="text" placeholder="Search By Submission" className="form-control mx-auto mt-2"
         style={{width: "40%" }} onChange={(e) => {setSearch2(e.target.value); }} />
    </div>
      <div className='container p-2 mt-4 mb-4'>
        <div className='row'>
        <div className='shadow card mx-auto w-75'>

              <table class="table table-striped">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">Submission</th>
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
                                    value.type.toLowerCase().includes(search.toLowerCase()) && value.name.toLowerCase().includes(search2.toLowerCase())
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



//</div> 
  )
}

export default ViewOfMarkingScheme