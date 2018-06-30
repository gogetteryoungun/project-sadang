import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Dashboard extends Component {

  componentDidMount() {
//    console.log("dashboard.tickers: " + JSON.stringify(this.props.tickers));
  }

  componentWillUpdate(nextState) {
//    console.log("dashboard.willUpdate: " + JSON.stringify(nextState));
  }

  render() {
    if (!this.props.tickers) {
      return <div>Loading...</div>
    }

    console.log("dashboard.render: " + JSON.stringify(this.props.tickers));
    console.log(`props.tickers: ${ this.props.tickers[0] }`);
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th key="exchange" class="text-center">Exchange</th>
            <th key="price" class="text-center">Price</th>
            <th key="volume" class="text-center">Volume</th>
            <th key="price-difference" class="text-center">Price Difference</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tickers.map((row, i) =>
            <tr key={row.exchange}>
              {Object.values(row).map((col) =>
                <td key={col}>{col}</td> 
              )}
            </tr>
          )}
      </tbody>
      </Table>
    );
  }
}

export default Dashboard;
