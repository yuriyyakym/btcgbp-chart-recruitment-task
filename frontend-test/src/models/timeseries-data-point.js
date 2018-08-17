export default class TimeseriesDataPoint {
  static fromServerFormat(dataPoint) {
    return {
      mid: Number(dataPoint.mid),
      bid: Number(dataPoint.bid),
      ask: Number(dataPoint.ask),
      timestamp: Math.floor(Number(dataPoint.timestamp) * 1000)
    };
  }
}
