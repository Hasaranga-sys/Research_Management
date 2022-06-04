import React from "react";

const Attendees = ({ chatter}) => {
    const testxtone = "From : "
    const testxttwo = "  =>  "
  return (
    <div className="attended">
      <div className="row mx-auto">
        {testxtone}{chatter.username}{testxttwo}{chatter.message}
      </div>
    </div>
  );
};
export default Attendees;