import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function SendFeedBack() {
  const [grpName, setGrpName] = useState("");
  const [feedback, setFeedback] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(grpName);

  useEffect(() => {
    console.log("compooo");

    var grp = id;
    setGrpName(grp);

    // if (id) {
    //   RoomService.getRoomByID(id).then((Response) => {
    //     setCategory(Response.data.category);
    //     setSize(Response.data.size);
    //     setDescription(Response.data.description);
    //   });
    // }
  }, []);

  return (
    <div>
      SendFeedBack
      {grpName}
    </div>
  );
}

export default SendFeedBack;
