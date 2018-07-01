import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Dashboard extends Component {

  componentDidMount() {
//    console.log("dashboard.tickers: " + JSON.stringify(this.props.tickers));
  }

  componentWillUpdate(nextState) {
  }

  render() {
    if (!this.props.tickers) {
      return <div>Loading...</div>
    }

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th key="exchange" className="text-center">Exchange</th>
            <th key="price" className="text-center">Price</th>
            <th key="volume" className="text-center">Volume</th>
            <th key="price-difference" className="text-center">Price Difference
            (vs. Korbit)</th>
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


function mapStateToProps(state, ownProps) {
  return {
    ticker: state.ticker,
    currency: state.selectedCurrency,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadExchangeActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
