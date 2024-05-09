import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from './Components/sidenav/SideNav';
import Dashboard from './Components/pages/dashboard/Dashboard';
import Tickets from './Components/pages/ticket/Tickets';
import TopPanel from './Components/topPanel/TopPanel';
import Feedback from './Components/pages/feedback/Feedback';
import Profile from './Components/pages/profile/Profile';
import Reports from './Components/pages/report/Reports';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import OpenWeb from './Components/openWeb/OpenWeb';
import Request from './Components/pages/requests/Requests';
import UserSideNav from './USER_Components/user_sidenav/UserSideNav';
import UserDashboard from './USER_Components/user_pages/user_dashboard/UserDashboard';
import UserTicket from './USER_Components/user_pages/user_ticket//UserTicket';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<OpenWeb />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* admin side interface */}
          <Route path="/dashboard" element={<AdminDashboardWithNav />} />
          <Route path="/request" element={<RequestWithNav />} />
          <Route path="/tickets" element={<TicketsWithNav />} />  
          <Route path="/feedback" element={<FeedbackWithNav />} />
          <Route path="/profile" element={<ProfileWithNav />} />
          <Route path="/report" element={<ReportWithNav />} />

          {/* user side interface */}
          <Route path="/user_dashboard" element={<UserDashboardWithNav />} />
          <Route path="/user_ticket" element={<UserTicketWithNav />} />
        </Routes>
      </div>
    </Router>
  );
}

// Higher-order component to add navigation to the pages
const withNav = (Component) => () => (
  <>
    <TopPanel />
    <Component />
    <SideNav />
  </>
);

// admin side nav
const AdminDashboardWithNav = withNav(Dashboard);
const RequestWithNav = withNav(Request);
const TicketsWithNav = withNav(Tickets);
const FeedbackWithNav = withNav(Feedback);
const ProfileWithNav = withNav(Profile);
const ReportWithNav = withNav(Reports);

const withNavUser =(Component) => () => (
  <>
    <TopPanel />
    <Component />
    <UserSideNav />
  </>
);

const UserDashboardWithNav = withNavUser(UserDashboard);
const UserTicketWithNav = withNavUser(UserTicket);


export default App;