import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";

function ViewUsers() {
  const [studentslist, setStudentslistList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.viewAllStudent().then((res) => {
      setStudentslistList(res.data.students);
      console.log(res.data.students);
    });
  }, []);

  const updateClicked = (_id) => {
    console.log(_id);
    navigate(`/student/register-student/${_id}`);
  };

  const deleteClicked = (_id) => {
    // alert(id);
    // Swal.fire(" succesfully deleted");
    StudentService.deleteStudent(_id).then((res) => {
      setStudentslistList(
        studentslist.filter((studentslist) => studentslist._id !== _id)
      );
    });
  };

  return (
    <div style={{ width: 1500 }} className="shadow card mx-auto mt-5 mb-5">
      <h2 className="text-center mt-4">View Students</h2>

      <input
        type="text"
        placeholder="search by Document name"
        className=" form-control mt-3 w-25 mx-auto"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="row">
        <div
          style={{ width: 1400 }}
          className="shadow-lg card mx-auto mt-5 mb-5"
        >
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
                <th scope="col">ID no</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">mobile no</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentslist
                .filter((value) => {
                  if (search === "") {
                    return value;
                  } else if (
                    //value.id.toString(includes(search))
                    value.username
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    value.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                  return 0;
                })
                .map((student) => (
                  <tr key={student._id}>
                    <td>{student.username}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.mobileNo}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => updateClicked(student._id)}
                        style={{ marginRight: 10 }}
                      >
                        update
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          deleteClicked(student._id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewUsers;
