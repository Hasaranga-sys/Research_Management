import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResearchTopicService from "../../Services/ResearchTopicService";
import ViewOfMarkingScheme from "../FileUpload/ViewOfMarkingScheme";


const TopicEvaluationPanelMem = () => {
  const [pdfs, setPdf] = useState();
    const [search, setSearch] = useState("Topic Details Document");
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
      <h2>Evaluate Research Topics</h2>
    <div style={{width:800}} className='shadow card mx-auto text-center p-3 mt-5 bg-light'>
    <h2>Evaluate Student Topics </h2>

    <div>
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
                      <th scope="col">FeedBack</th>
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
                        <td><button className="btn btn-primary">Feedback</button></td>
                        
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

</div> 
     
  )
}

export default TopicEvaluationPanelMem