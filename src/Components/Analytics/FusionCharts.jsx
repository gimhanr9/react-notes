import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Visit to Purchase Conversion Analysis for 2017",
    subcaption: "GameStop",
    theme: "fusion",
    plottooltext:
      "$label: <b>$dataValue</b><br>Success: <b>$percentOfPrevValue</b>",
    showvalues: "1",
    decimals: "1",
    usesameslantangle: "0",
    showpercentvalues: "1",
  },
  data: [
    {
      label: "Unique Website Visits",
      value: "1620000",
    },
    {
      label: "Programme Details Section Visits",
      value: "730000",
    },
    {
      label: "Attempts to Register",
      value: "620000",
    },
    {
      label: "Successful Registrations",
      value: "390000",
    },
    {
      label: "Logged In",
      value: "260000",
    },
    {
      label: "Purchased on Introductory Offers",
      value: "180000",
    },
  ],
};

function Charts() {
  return (
    <ReactFusioncharts
      type="funnel"
      width="100%"
      height="100%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}

export default Charts;
