import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar.js';
import SideBar1 from './Employeesidebar.js';
import ApplyLeave from './LeaveForm.js'; 
import SalaryReport from '../SalaryReport.js'; 
import LeaveRequests from '../LeaveRequests.js'; 

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar />
      <div className="home-page">
        <SideBar1 onButtonClick={handleButtonClick} />
        <div className="content">
          {selectedComponent === 'applyLeave' && <ApplyLeave />}
          {selectedComponent === 'viewEmployeeDetails' && <div/>}
          {selectedComponent === 'viewLeaveRequest' && <LeaveRequests/>}
          {selectedComponent === 'salaryReports' && <SalaryReport/>}
        </div>
      </div>
    </main>
  );
};

export default Admin;