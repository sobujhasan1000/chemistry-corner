import ReactApexChart from "react-apexcharts";

const PolarChart = () => {
  const state = {
    series: [30, 45, 25],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 80
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="polarArea" />
      </div>
    </div>
  );
};

export default PolarChart;
