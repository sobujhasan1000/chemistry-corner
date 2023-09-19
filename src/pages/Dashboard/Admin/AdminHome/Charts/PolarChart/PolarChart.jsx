import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllPayments } from "../../../../../../api/fetch";

const PolarChart = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllPayments().then((data) => setUsers(data));
  }, []);

  const free= users.filter((user) => user.package === "7 Days Free Trial").length;
  const Platinum = users.filter((user) => user.package === "Platinum").length;
  const gold = users.filter((user) => user.package === "Gold").length;
console.log("reee",gold)
  const state = {
    series: [free, gold, Platinum],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      labels: ["Free trial", "Gold", "Platinum"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 80,
            },
            legend: {
              position: "bottom",
            },
            labels: ["M", "T", "D"],
          },
        },
        {
          breakpoint: 768,
          options: {
            labels: ["Free trial", "Gold", "Platinum"],
          },
        },
      ],
    },
  };

  return (
    <div>
      <div id="chart">
        <h1 className="text-lg font-bold mb-8">Users package</h1>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="polarArea"
        />
      </div>
    </div>
  );
};

export default PolarChart;
