import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';

export const theme = {
  backgroundColor: "rgba(51,51,51,1)",
  titleColor: "#eeeeee",
  subtitleColor: "#aaa",
  textColorShow: false,
  textColor: "#333",
  markTextColor: "#eee",
  color: [
    "#dd6b66",
    "#759aa0",
    "#e69d87",
    "#8dc1a9",
    "#ea7e53",
    "#eedd78",
    "#73a373",
    "#73b9bc",
    "#7289ab",
    "#91ca8c",
    "#f49f42"
  ],
  borderColor: "#ccc",
  borderWidth: 0,
  visualMapColor: [
    "#bf444c",
    "#d88273",
    "#f6efa6"
  ],
  legendTextColor: "#eeeeee",
  kColor: "#fd1050",
  kColor0: "#0cf49b",
  kBorderColor: "#fd1050",
  kBorderColor0: "#0cf49b",
  kBorderWidth: 1,
  lineWidth: 2,
  symbolSize: 4,
  symbol: "circle",
  symbolBorderWidth: 1,
  lineSmooth: false,
  graphLineWidth: 1,
  graphLineColor: "#aaa",
  mapLabelColor: "#000",
  mapLabelColorE: "rgb(100,0,0)",
  mapBorderColor: "#444",
  mapBorderColorE: "#444",
  mapBorderWidth: 0.5,
  mapBorderWidthE: 1,
  mapAreaColor: "#eee",
  mapAreaColorE: "rgba(255,215,0,0.8)",
  axes: [
    {
      type: "all",
      name: "通用坐标轴",
      axisLineShow: true,
      axisLineColor: "#eeeeee",
      axisTickShow: true,
      axisTickColor: "#eeeeee",
      axisLabelShow: true,
      axisLabelColor: "#eeeeee",
      splitLineShow: true,
      splitLineColor: [
        "#aaaaaa"
      ],
      splitAreaShow: false,
      splitAreaColor: [
        "#eeeeee"
      ]
    }
  ],
  axisSeperateSetting: false,
  toolboxColor: "#999",
  toolboxEmpasisColor: "#666",
  tooltipAxisColor: "#eeeeee",
  tooltipAxisWidth: "1",
  timelineLineColor: "#eeeeee",
  timelineLineWidth: 1,
  timelineItemColor: "#dd6b66",
  timelineItemColorE: "#a9334c",
  timelineCheckColor: "#e43c59",
  timelineCheckBorderColor: "rgba(194,53,49, 0.5)",
  timelineItemBorderWidth: 1,
  timelineControlColor: "#eeeeee",
  timelineControlBorderColor: "#eeeeee",
  timelineControlBorderWidth: 0.5,
  timelineLabelColor: "#eeeeee",
  datazoomBackgroundColor: "rgba(47,69,84,0)",
  datazoomDataColor: "rgba(255,255,255,0.3)",
  datazoomFillColor: "rgba(167,183,204,0.4)",
  datazoomHandleColor: "#a7b7cc",
  datazoomHandleWidth: "100",
  datazoomLabelColor: "#eeeeee"
};

echarts.registerTheme('custom', theme);

export {
  echarts
};
