import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentGroupService from "../../Services/StudentGroupService";

const AddPanelMembers = () => {
    const[studentgroup, setStudentGroup] = useState("");
    const [panelMember_1, setPanelMember_1] = useState([])
    const [panelMember_2, setPanelMember_2] = useState("")
    const navigate = useNavigate();
    const{_id} = useParams();

    useEffect(()=>{
        if(_id){
            StudentGroupService.getStudentGroupById(_id.data).then((res)=>{
                setPanelMember_1(res.data.panelMember_1)
                setPanelMember_2(res.data.panelMember_2)
            })
        }
        
    },[])

    const AllocatePanelMember = (e) =>{
        e.preventDefault();
        

        const studentgroup = {panelMember_1,panelMember_2}

        if(_id){
            StudentGroupService.UpdateStudentGroup(_id,studentgroup).then((response)=>{
                navigate('/AdminHome/ViewStudentGroups')
            })
        }
    }

  return (
    <div className="container col-md-8 offset-md-1 offset-md-0">
       
            <div className="card col-md-8 offset-md-1 offset-md-0 bg-light container">
           
                <form onSubmit={AllocatePanelMember}>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Panel Member 1</label>
                        <div className="col-sm-9">
                            <input className="form-control" value={panelMember_1} 
                                    onChange={(e) =>{setPanelMember_1(e.target.value)}}
                                    placeholder={`${_id.panelMember_1}`} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Panel Member 2</label>
                        <div className="col-sm-9">
                            <input className="form-control" value={panelMember_2} 
                                    onChange={(e) =>{setPanelMember_2(e.target.value)}}
                                    placeholder="Enter panel Member 2" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
        
    </div>
  )
}

export default AddPanelMembers