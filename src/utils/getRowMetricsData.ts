interface Metrics {
    deliveries: number;
    clicks: number;
    conversions: number;
    winRate: number;
    viewContent: number;
    roi: number;
  }

const getRowMetricsData = (metrics: Metrics, rowTitle: string) => {
  const {
    deliveries, clicks, conversions, winRate, viewContent, roi,
  } = metrics;

  const formatPercentage = (value: number) => `${value?.toFixed(2)} %`;

  const rowData = [
    rowTitle, deliveries, clicks, conversions,
    formatPercentage(winRate), viewContent, formatPercentage(roi),
  ];

  return rowData;
};

export default getRowMetricsData;
