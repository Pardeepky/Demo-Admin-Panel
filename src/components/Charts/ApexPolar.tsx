import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ApexPolar = () => {
  const state = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  }

  const options:ApexOptions = {
	chart: {
	  type: "polarArea",
	},
	stroke: {
	  colors: ["#fff"],
	},
	fill: {
	  opacity: 0.8,
	},
	responsive: [
	  {
		breakpoint: 480,
		options: {
		  chart: {
			width: 200,
		  },
		  legend: {
			position: "bottom",
		  },
		},
	  },
	],
  }

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={state.series}
          type="polarArea"
        />
      </div>
    </>
  );
};

export default ApexPolar;
