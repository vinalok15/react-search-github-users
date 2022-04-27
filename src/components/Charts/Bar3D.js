import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartComponent = ({ data }) => {

  const chartConfigs = {
  type: 'bar3d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Most Forked",
      yAxisName: "Stars",
      xAxisName: "Repos",
      xAxisNameFontSize: "16px",
      yAxisNameFontSize:"16px",
    },
    "data": data,
  }
};
   return <ReactFC {...chartConfigs} />;
}

export default chartComponent;