import { Paper } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const Charts = () => {
  const option = {
    xAxis: {
      type: 'category',
      name: 'Days',
      nameLocation: 'center',
      nameGap: 50,
      nameTextStyle: {
        align: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#333',
        },
      },
    },
    yAxis: {
      type: 'value',
      name: 'Widgets',
      nameLocation: 'center',
      nameRotate: 90,
      nameTextStyle: {
        align: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
      },
      nameGap: 50,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#333',
        },
      },
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        data: [20, 200, 111, 256, 64, 156, 42],
        type: 'bar',
      },
    ],
  };

  return (
    <>
      <h2>Charts</h2>
      <Paper elevation={8} sx={{ p: 2, m: 2, textAlign: 'center' }}>
        <ReactEcharts option={option} />
      </Paper>
    </>
  );
};

export default Charts;
