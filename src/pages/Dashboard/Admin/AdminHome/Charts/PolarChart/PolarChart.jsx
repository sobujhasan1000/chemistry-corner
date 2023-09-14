import ReactApexChart from "react-apexcharts";

const PolarChart = () => {
  const state = {
    series: [45, 25, 30],
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
      labels: ["Mobile", "Tablet", "Desktop"],
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
            labels: ["Mobile", "Tablet", "Desktop"],
          },
        },
      ],
    },
  };

  return (
    <div>
      <div id="chart">
        <h1 className="text-lg font-bold mb-8">Used Devices</h1>
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
