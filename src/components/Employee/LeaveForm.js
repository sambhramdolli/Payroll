import React, { useState } from "react";
import "./LeaveForm.css";

const LeaveForm = ({ addLeave }) => {
  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    comment: "",
    attachment: null, // Add attachment to the state
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({
        ...formData,
        [name]: files[0], // Handle file input
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLeave(formData); // Call the addLeave function passed from props
    setFormData({
      leaveType: "",
      fromDate: "",
      toDate: "",
      comment: "",
      attachment: null, // Reset attachment
    });
  };

  return (
    <div className="page-container">
      <div className="leave-form-container">
        <h2>Apply Leave</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="leaveType">Leave Type<span className="required-field">*</span></label>
            <select
              name="leaveType"
              id="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Earned Leave">Earned Leave</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="fromDate">From Date<span className="required-field">*</span></label>
            <input
              type="date"
              name="fromDate"
              id="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="toDate">To Date<span className="required-field">*</span></label>
            <input
              type="date"
              name="toDate"
              id="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Reason</label>
            <textarea
              name="comment"
              id="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attachment</label>
            <input
              type="file"
              name="attachment"
              id="attachment"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveForm;

