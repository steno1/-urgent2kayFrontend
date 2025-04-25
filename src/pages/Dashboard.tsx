import React from "react";
import "../styles/dashboard.css";

const Dashboard = ({ role }: { role: string }) => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Welcome to the Dashboard</h2>
          <p>
            Here’s your personalized dashboard. Select actions below based on
            your role.
          </p>
        </div>
        <div className="dashboard-buttons">
          
          {role === "sponsor" && (
            <>
              <button>View Sponsored Requests</button>
              <button>Manage Payments</button>
            </>
          )}
          {role === "user" && (
            <>
              <button>Create Request</button>
              <button>Track My Requests</button>
            </>
          )}
          {role === "admin" && (
            <>
              <button>Manage Users</button>
              <button>View All Requests</button>
            </>
          )}
        </div>
        <div className="dashboard-footer">
          <p>© 2025 URGENT 2KAY. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
