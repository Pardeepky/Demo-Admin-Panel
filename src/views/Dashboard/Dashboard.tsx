import React from "react";
import ApexPolar from "../../components/Charts/ApexPolar";

const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Users</h1>
                  <hr />
                  <div className="row">
                    <div style={{ width: "75%" }}>
                      <p className="card-text ">Total no. of users</p>
                    </div>
                    <div style={{ width: "25%" }}>
                      <p style={{ float: "right" }}>
                        <strong>6</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <ApexPolar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
