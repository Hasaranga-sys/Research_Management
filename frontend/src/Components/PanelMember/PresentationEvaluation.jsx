import React, { useEffect, useState } from 'react'
import ViewOfMarkingScheme from '../FileUpload/ViewOfMarkingScheme';

const PresentationEvaluation = () => {
  const [pdfs, setPdf] = useState();
    const [search, setSearch] = useState("Presentation");
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
    <div className='row text-center mt-3'>
      <h2>Evaluate Presentations</h2>
    <div className='shadow card mx-auto w-50 text-center p-3 mt-5 bg-light'>
    <h2></h2>

    <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Marking Scheme</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Presentation Submissions</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <h2>Marking Schemes</h2>
      <ViewOfMarkingScheme/>
    </div>

  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <h2>Presentation Evaluation</h2>

    <div className="container">
      <input type="text" placeholder="Search By Group ID" className="form-control mx-auto mt-2"
         style={{width: "40%" }} onChange={(e) => {setSearch2(e.target.value); }} />
    </div>

    <div className='container p-2 mt-4 mb-4'>
        <div className='row'>
        <div className='shadow card mx-auto w-75'>

              <table class="table table-striped mt-1">
                  <thead className='table-primary'>
                    <tr>
                      <th scope="col">Group Id</th>
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
          
</div>
    <div>
      
    
  </div>



</div>  

</div> 
  )
}

export default PresentationEvaluation