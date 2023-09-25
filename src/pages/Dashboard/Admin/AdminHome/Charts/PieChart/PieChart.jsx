import { useEffect } from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllMembers } from "../../../../../../api/fetch";

const PieChart = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllMembers().then((data) => setUsers(data));
  }, []);

  const usa = users.filter((user) => user.country === "usa").length;
  const nepal = users.filter((user) => user.country === "nepal").length;
  const bangladesh = users.filter((user) => user.country === "bangladesh").length;
  const germany = users.filter((user) => user.country === "germany").length;
  const india = users.filter((user) => user.country === "india").length;

  const state = {
    series: [usa,nepal,bangladesh,germany,india],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["USA", "Nepal", "Bangladesh","Germany","India"],
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
    },
  };

  return (
    <div>
      <div id="chart" className="my-8">
        <h1 className="text-2xl font-bold mb-8 text-center ">Current Visits</h1>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
};

export default PieChart;
