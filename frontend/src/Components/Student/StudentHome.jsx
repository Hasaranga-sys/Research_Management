import React from "react";
import { Link } from "react-router-dom";

const StudentHome = () => {
  return (
    <div>
      <div className="row">
        <div className="card shadow-lg bg-light w-75 mx-auto mt-5 text-center ">
          <h1>Welcome</h1>
          <div className="py-5">
            <div className="container">
              <div className="row hidden-md-up">
                <div className="col-md-3">
                  <div
                    style={{ height: 190 }}
                    className="shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 110, width: 130 }}
                        className="card-img-top mt-3"
                        src="https://visualpharm.com/assets/337/Poll%20Topic-595b40b85ba036ed117da18a.svg"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/TopicRegisterTable">
                        <button className="btn btn-primary" variant="contained">
                          Research Topic Management
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    style={{ height: 190 }}
                    className=" shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 130, width: 130 }}
                        className="card-img-top"
                        src="https://visualpharm.com/assets/830/User%20Groups-595b40b75ba036ed117d9da0.svg"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/StudentGroupHome">
                        <button className="btn btn-primary" variant="contained">
                          Student Groups
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    style={{ height: 190 }}
                    className="shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 130, width: 130 }}
                        className="card-img-top"
                        src="https://visualpharm.com/assets/506/Load%20Resume%20Template-595b40b75ba036ed117d9f14.svg"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/StudentGroupHome/GetTemplates">
                        <button className="btn btn-primary" variant="contained">
                          Get Templates
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    style={{ height: 190 }}
                    className="shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 130, width: 130 }}
                        className="card-img-top"
                        src="https://visualpharm.com/assets/544/Submit%20Resume-595b40b85ba036ed117da42c.svg"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/StudentGroupHome/SubmitDocuments">
                        <button className="btn btn-primary" variant="contained">
                          Submit Documents
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mt-5">
                  <div
                    style={{ height: 190 }}
                    className="shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 130, width: 130 }}
                        className="card-img-top"
                        src="https://www.pinclipart.com/picdir/big/419-4192970_trusted-service-delivery-partner-executive-agreement-clipart-png.png"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/Communicate">
                        <button className="btn btn-primary" variant="contained">
                          Chat With Supervisors
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mt-5">
                  <div
                    style={{ height: 190 }}
                    className="shadow-lg card text-center"
                  >
                    <div className="card-block">
                      <img
                        style={{ height: 130, width: 130 }}
                        className="card-img-top"
                        src="https://visualpharm.com/assets/623/File-595b40b65ba036ed117d4085.svg"
                        alt="Card image cap"
                      />
                      <h4 className="card-title"></h4>
                      <Link to="/StudentHome/OtherSubmissions">
                        <button className="btn btn-primary" variant="contained">
                          Other Submissions{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
