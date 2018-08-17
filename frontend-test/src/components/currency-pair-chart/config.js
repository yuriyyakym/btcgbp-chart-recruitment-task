import { primaryChartColor } from 'palette';

export default ({ timeseries }) => ({
  baseOption: {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      formatter: function ([ hoveredDataPoint ]) {
        return hoveredDataPoint.axisValueLabel + ' : ' + hoveredDataPoint.value[1];
      },
      axisPointer: {
        animation: false
      }
    },
    grid: {
      top: 30,
      left: 50,
      right: 20
    },
    xAxis: {
      type: 'time',
      min: 'dataMin',
      max: 'dataMax',
      splitLine: {
        show: false
      },
      axisLabel: {
        fontWeight: 300,
        showMinLabel: false,
        showMaxLabel: false
      },
      axisLine: {
        lineStyle: {
          width: 0.5
        }
      }
    },
    yAxis: {
      type: 'value',
      min: 'dataMin',
      axisLabel: {
        fontWeight: 300,
        showMinLabel: false
      },
      axisLine: {
        lineStyle: {
          width: 0.5
        }
      },
      splitLine: {
        lineStyle: {
          width: 0.5,
          'type': 'dotted',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: [
      {
        type: 'line',
        lineStyle: {
          color: primaryChartColor
        },
        symbol: 'none',
        data: timeseries.map((dataPoint) => [
          dataPoint.timestamp,
          dataPoint.value
        ])
      }
    ]
  },
  media: [
    {
      query: {
        maxWidth: 767
      },
      option: {
        xAxis: {
          splitNumber: 5
        }
      }
    }
  ]
});