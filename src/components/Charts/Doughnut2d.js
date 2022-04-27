import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartComponent = ({ data }) => {

  const chartConfigs = {
  type: 'doughnut2d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Starts per Language",
      "theme": "fusion",
      decimals: 0,
      doughnutRadius: '45%',
      showPercentValues: 0,
      theme : 'candy'
    },
    "data": data,
  }
};
   return <ReactFC {...chartConfigs} />;
}

export default chartComponent;