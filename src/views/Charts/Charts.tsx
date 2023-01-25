import React from "react";
import ApexChart from "../../components/Charts/ApexChart";
import _CHART_JS from "../../components/Charts/ChartJS";

const Charts = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <ApexChart />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card">
                <div className="card-body">
                  <_CHART_JS />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
