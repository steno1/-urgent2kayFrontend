import React from "react";
import "./dashboard.css";

const Dashboard = ({ role }: { role: string }) => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h2>Welcome to Your Dashboard</h2>
          <p>
            Take control of your finances. Choose an action based on your role below.
          </p>
        </header>

        <section className="dashboard-actions">
          {role === "sponsor" && (
            <>
              <button className="dashboard-btn">View Sponsored Requests</button>
              <button className="dashboard-btn">Manage Payments</button>
              <button className="dashboard-btn">Track Contributions</button>
            </>
          )}

          {role === "user" && (
            <>
              <button className="dashboard-btn">Create a New Request</button>
              <button className="dashboard-btn">Track My Requests</button>
              <button className="dashboard-btn">Shared Goals</button>
            </>
          )}

          {role === "admin" && (
            <>
              <button className="dashboard-btn">Manage Users</button>
              <button className="dashboard-btn">View All Requests</button>
              <button className="dashboard-btn">System Insights</button>
            </>
          )}

          {/* Additional common buttons */}
          <button className="dashboard-btn">Notifications Center</button>
          <button className="dashboard-btn">Scheduled Payments</button>
          <button className="dashboard-btn">Relationship Profiles</button>
          <button className="dashboard-btn">Shared Goals</button>
        </section>

        <footer className="dashboard-footer">
          <p>© 2025 URGENT 2KAY — Empowering smarter bill management.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
