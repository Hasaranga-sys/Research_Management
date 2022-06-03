import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StaffMemberService from "../../Services/StaffMemberService";

function ViewStaff() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    StaffMemberService.getAllStaffMembers().then((res) => {
      setList(res.data.staffMember);
      console.log(res.data.staffMember);
    });
  }, []);

  const updateClicked = (_id) => {
    console.log(_id);
    navigate(`/register-staff-member/${_id}`);
  };

  const deleteClicked = (_id) => {
    // alert(id);
    // Swal.fire(" succesfully deleted");
    StaffMemberService.deleteStaff(_id).then((res) => {
      setList(list.filter((list) => list._id !== _id));
    });
  };

  return (
    <div style={{ width: 1500 }} className="shadow card mx-auto mt-5 mb-5">
      <h2 className="text-center mt-4">View Staff</h2>

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
                <th scope="col">role</th>
                <th scope="col">area</th>
                <th scope="col">email</th>
                <th scope="col">mobile no</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {list
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
                .map((staff) => (
                  <tr key={staff._id}>
                    <td>{staff.username}</td>
                    <td>{staff.name}</td>
                    <td>{staff.role}</td>
                    <td>{staff.component}</td>
                    <td>{staff.email}</td>
                    <td>{staff.mobileNo}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => updateClicked(staff._id)}
                        style={{ marginRight: 10 }}
                      >
                        update
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          deleteClicked(staff._id);
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

export default ViewStaff;
