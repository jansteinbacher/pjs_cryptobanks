import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const IntroductionBlockchain = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365'
        );
        const bitcoinData = response.data;
        const prices = bitcoinData.prices.slice(-365).map((price) => price[1]);
        const timestamps = bitcoinData.prices.slice(-365).map((price) => price[0]);

        const formattedDates = timestamps.map((timestamp) =>
          new Date(timestamp).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        );

        const filteredDates = formattedDates.filter((date, index) => {
          const currentDate = new Date(timestamps[index]);
          return currentDate.getDate() === 1;
        });

        const filteredPrices = prices.filter((price, index) => {
          const currentDate = new Date(timestamps[index]);
          return currentDate.getDate() === 1;
        });

        const data = {
          series: [
            {
              name: 'Bitcoin Price',
              data: filteredPrices,
            },
          ],
          options: {
            chart: {
              height: 350,
              type: 'line',
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: 'smooth',
            },
            xaxis: {
              categories: filteredDates,
              labels: {
                rotate: -45,
                rotateAlways: true,
              },
            },
            yaxis: {
              labels: {
                formatter: function (val) {
                  return '$' + val.toFixed(0);
                },
              },
            },
          },
        };

        setChartData(data);
      } catch (error) {
        console.error('Error fetching Bitcoin price data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mr-20 ml-20'>
      <h2 className="text-2xl font-bold mb-4">Grundlagen der Blockchain-Technologie</h2>
      <h3 className="text-xl font-bold mb-4">Bitcoin Preis in den letzten 12 Monaten</h3>
      {chartData ? (
        <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default IntroductionBlockchain;
