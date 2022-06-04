import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import React, { useContext } from "react";

import { AuthContext } from "./Context/AuthContext";
import NavBar from "./Components/NavBar";
import { Home } from "./Components/Home";
import Login from "./Components/Login";
import Todos from "./Components/Todos";
import Admin from "./Components/Admin";
import AuthProvider from "./Context/AuthContext";
import TestTodo from "./Components/TestTodo";
import ResearchTopicForm from "./Components/ResearchTopicForm";
import FileUploadH from "./Components/FileUpload/FileUploadH";
import AddFile from "./Components/FileUpload/AddFile";
import StudentHome from "./Components/Student/StudentHome";
import TopicRegisterTable from "./Components/Student/TopicRegisterTable";
import TopicRegisterForm from "./Components/Student/TopicRegisterForm";
import StudentGroupTable from "./Components/Student/StudentGroupTable";
import StudentGroupHome from "./Components/Student/StudentGroupHome";
import AdminHome from "./Components/Admin/AdminHome";
import ViewStudentGroups from "./Components/Admin/ViewStudentGroups";
import AddPanelMembers from "./Components/Admin/AddPanelMembers";
import AddStudentGroup from "./Components/Student/AddStudentGroup";
import PanelMemberHome from "./Components/PanelMember/PanelMemberHome";
import SupervisorHome from "./Components/Supervisor/SupervisorHome";
import TopicView from "./Components/Supervisor/TopicView";
import TopicAcceptorReject from "./Components/Supervisor/TopicAcceptorReject";
import UploadDocumentTemplates from "./Components/Admin/UploadDocumentTemplates";
import GetTemplates from "./Components/Student/GetTemplates";
import SubmitDocuments from "./Components/Student/SubmitDocuments";
import GetStudentDocuments from "./Components/Supervisor/GetStudentDocuments";
import PresentationEvaluation from "./Components/PanelMember/PresentationEvaluation";
import ChatApp from "./Components/chatComponents/chatApp";

//udula
import StudentRegister from "./Components/Student/StudentRegister";
import StaffMemberRegister from "./Components/StaffMemberRegister";
import ReqSupervisor from "./Components/Student/ReqSupervisor";
import GetMarkingSchemeSupervisor from "./Components/Supervisor/GetMarkingSchemeSupervisor";
import TopicEvaluationPanelMem from "./Components/PanelMember/TopicEvaluationPanelMem";
import ViewOfMarkingScheme from "./Components/FileUpload/ViewOfMarkingScheme";
import TopicDocumentSubmission from "./Components/Student/TopicDocumentSubmission";
import ReqCoSupervisor from "./Components/Student/ReqCoSupervisor";
import ViewProjectGroups from "./Components/Admin/ViewProjectGroups";
import ViewUsers from "./Components/Admin/ViewUsers";
import UpdateStudent from "./Components/Admin/UpdateStudent";
import ViewStaff from "./Components/Admin/ViewStaff";
import CommunicateSupervisor from "./Components/Student/CommunicateSupervisor";
import SubmitionTypes from "./Components/Admin/SubmitionTypes";
import SubmitionTypeForm from "./Components/Admin/SubmitionTypeForm";
import SendFeedBack from "./Components/PanelMember/SendFeedBack";
import ThesisView from "./Components/FileUpload/ThesisView";
import StudentOtherSubmissions from "./Components/Student/StudentOtherSubmissions";
import ExtSubmissions from "./Components/Student/ExtSubmissions";
function App() {
  // const  { user,setUser,isAuthenticated,setIsAuthenticated} = useContext(AuthContext);
  // console.log(user);
  // console.log(isAuthenticated);
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          {/* <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/todos" component={TestTodo}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/researchTopic" component={ResearchTopicForm}/> */}

          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          {/* <Route path="/register-student" element={<StudentRegister />} exact /> */}
          {/* <Route
            path="/register-staff-member"
            // element={<StaffMemberRegister />}
            exact
          /> */}
          <Route path="/todos" element={<Todos />} exact />
          <Route path="/admin" element={<Admin />} exact />

          {/* Student */}
          <Route path="/StudentHome" element={<StudentHome />} exact />
          <Route
            path="/StudentHome/TopicRegisterTable"
            element={<TopicRegisterTable />}
            exact
          />
          <Route
            path="/StudentHome/TopicRegisterTable/TopicRegisterForm"
            element={<TopicRegisterForm />}
            exact
          />
          <Route
            path="/StudentHome/TopicRegisterTable/TopicRegisterForm/:_id"
            element={<TopicRegisterForm />}
            exact
          />

          <Route
            path="/StudentHome/StudentGroupHome"
            element={<StudentGroupHome />}
            exact
          />
          <Route
            path="/StudentHome/StudentGroupHome/StudentGroupsTable"
            element={<StudentGroupTable />}
            exact
          />

          {/* Student */}
          <Route path="/StudentHome" element={<StudentHome />} exact />
          <Route
            path="/StudentHome/TopicRegisterTable"
            element={<TopicRegisterTable />}
            exact
          />
          <Route
            path="/StudentHome/TopicRegisterTable/TopicRegisterForm"
            element={<TopicRegisterForm />}
            exact
          />
          <Route
            path="/StudentHome/TopicRegisterTable/TopicRegisterForm/:_id"
            element={<TopicRegisterForm />}
            exact
          />

          <Route
            path="/StudentHome/StudentGroupHome"
            element={<StudentGroupHome />}
            exact
          />
          <Route
            path="/StudentHome/StudentGroupHome/StudentGroupsTable"
            element={<StudentGroupTable />}
            exact
          />
          <Route
            path="/StudentHome/StudentGroupHome/AddStudentGroup"
            element={<AddStudentGroup />}
            exact
          />

          <Route path="/researchTopic" element={<ResearchTopicForm />} exact />

          <Route
            path="/StudentHome/StudentGroupHome/GetTemplates"
            element={<GetTemplates />}
            exact
          />
          <Route
            path="/StudentHome/StudentGroupHome/SubmitDocuments"
            element={<SubmitDocuments />}
            exact
          />

          {/* Admin */}
          <Route path="/AdminHome" element={<AdminHome />} exact />
          <Route
            path="/AdminHome/ViewStudentGroups"
            element={<ViewStudentGroups />}
            exact
          />
          <Route
            path="/AdminHome/ViewStudentGroups/AddPanelMembers/:_id"
            element={<AddPanelMembers />}
            exact
          />
          <Route
            path="/AdminHome/UploadDocumentTemplates"
            element={<UploadDocumentTemplates />}
            exact
          />

          {/* supervisor */}
          <Route path="/SupervisorHome" element={<SupervisorHome />} exact />
          <Route
            path="/SupervisorHome/TopicView"
            element={<TopicView />}
            exact
          />
          <Route
            path="/SupervisorHome/TopicView/TopicAcceptorReject/:_id"
            element={<TopicAcceptorReject />}
            exact
          />
          <Route
            path="/SupervisorHome/DocumentEvaluation"
            element={<GetStudentDocuments />}
            exact
          />

          {/* panel member */}
          <Route path="/panelMemberHome" element={<PanelMemberHome />} exact />
          <Route
            path="/panelMemberHome/PresentationEvaluation"
            element={<PresentationEvaluation />}
            exact
          />

          <Route path="/fileUploadHome" element={<FileUploadH />} exact />
          <Route path="/fileAdd" element={<AddFile />} exact />

          {/* udula */}
          <Route
            path="/student/register-student"
            element={<StudentRegister />}
            exact
          />
          <Route
            path="/register-staff-member"
            element={<StaffMemberRegister />}
            exact
          />
          <Route
            path="/req-supervisor/:grpid"
            element={<ReqSupervisor />}
            exact
          />

          <Route
            path="/req-co-supervisor/:grpid"
            element={<ReqCoSupervisor />}
            exact
          />
          <Route path="/admin/view-users" element={<ViewUsers />} exact />
          <Route
            path="/student/register-student/:id"
            element={<StudentRegister />}
            exact
          />
          <Route
            path="/admin/view-staff-member"
            element={<ViewStaff />}
            exact
          />
          <Route
            path="/register-staff-member/:id"
            element={<StaffMemberRegister />}
            exact
          />
          <Route
            path="/panel-member-feedback/:id"
            element={<SendFeedBack />}
            exact
          />

          {/* hasasranga new */}
          {/* common */}
          <Route
            path="/ViewofMarkingScheme"
            element={<ViewOfMarkingScheme />}
            exact
          />
          {/* supervisor */}
          <Route
            path="/SupervisorHome/GetMarkingScheme"
            element={<GetMarkingSchemeSupervisor />}
            exact
          />
          {/* panel member */}
          <Route
            path="/panelMemberHome/TopicEvaluation"
            element={<TopicEvaluationPanelMem />}
            exact
          />
          {/* student */}
          <Route
            path="/StudentHome/TopicDocumentSubmit"
            element={<TopicDocumentSubmission />}
            exact
          />
          <Route path="/StudentHome/OtherSubmissions" element={<StudentOtherSubmissions/>} exact/>
          <Route path="/StudentHome/OtherSubmissions/ExtSubmissions/:id" element={<ExtSubmissions/>} exact/>
          <Route path="/ViewThesis" element={<ThesisView/>} exact/>
          <Route path="StudentHome/Communicate"
            element={<CommunicateSupervisor />}
            exact
          />
          {/* admin */}
          <Route path="/AdminHome/ViewProjectGroups" element={<ViewProjectGroups/>} exact/>
          <Route path="/AdminHome/SubmissionTypeTable" element={<SubmitionTypes/>} exact/>
          <Route path="/AdminHome/SubmissionTypeTable/:_id" element={<SubmitionTypeForm/>} exact/>
          
          
          
          <Route
            path="/AdminHome/ViewProjectGroups"
            element={<ViewProjectGroups />}
            exact
          />

          {/* chat */}
          <Route path="/chat/:username" element={<ChatApp />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
