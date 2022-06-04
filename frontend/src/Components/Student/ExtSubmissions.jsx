import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import submitionService from '../../Services/submitionService';

const ExtSubmissions = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [pdf,setPdf] = useState("");
    const { _id } = useParams();

    useEffect(() => {
      submitionService.getsubmition(_id).then((response) => {
        console.log(response.data.submitionType.submittiontype);
      });
    });

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
    <div>ExtSubmissions</div>
  )
}

export default ExtSubmissions