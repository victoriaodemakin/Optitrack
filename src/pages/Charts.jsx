import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const data = [
  {
    name: 'January  ',
    Revenue: 4000,
    Exenses: 2400,
    Profit: 2400,
  },
  {
    name: 'February',
    Revenue: 3000,
    Exenses: 1398,
    Profit: 2210,
  },
  {
    name: 'March',
    Revenue: 2000,
    Exenses: 9800,
    Profit: 2290,
  },
  {
    name: 'April',
    Revenue: 2780,
    Exenses: 3908,
    Profit: 2000,
  },
  {
    name: 'May',
    Revenue: 1890,
    Exenses: 4800,
    Profit: 2181,
  },
  {
    name: 'June',
    Revenue: 2390,
    Exenses: 3800,
    Profit: 2500,
  },
  {
    name: 'July',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },
  {
    name: 'August',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },{
    name: 'September',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },{
    name: 'October',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },{
    name: 'November',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },{
    name: 'December',
    Revenue: 3490,
    Exenses: 4300,
    Profit: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Expenses" fill="#8884d8" />
          <Bar dataKey="Revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

