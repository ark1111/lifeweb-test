import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  title: {
    text: "نمودار درآمد و هزینه",
  },
  chart: {
    type: "column",
  },
  xAxis: {
    categories: ["بهار", "تابستان", "پاییز", "زمستان"],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  series: [
    {
      name: "درامد",
      data: [200, 100, 400, 700],
      color: "#666",
    },
    {
      name: "هزینه",
      data: [300, 200, 200, 100],
      color: "#333",
    },
  ],
};

const SampleChart = () => {
  return (
    <Box sx={{ width: "60%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default SampleChart;
