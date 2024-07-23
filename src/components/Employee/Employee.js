import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar.js';
import SideBar1 from './Employeesidebar.js';
import ApplyLeave from './LeaveApplication.js';
import SalaryReport from '../SalaryReport.js';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (action) => {
    // Toggle the state
    if (selectedComponent === action) {
      setSelectedComponent(null);
    } else {
      setSelectedComponent(action);
    }
  };

  return (
    <main>
      <NavBar />
      <div className="home-page">
        <SideBar1 onButtonClick={handleButtonClick} />
        <div className="content">
          {selectedComponent === 'Apply Leave' && <ApplyLeave />}
          {selectedComponent === 'salaryReports' && <SalaryReport />}
        </div>
      </div>
    </main>
  );
};

export default Employee;

