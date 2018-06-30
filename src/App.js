import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.loadExchangeActions.loadAllExchangeTicker('btc');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard tickers={this.props.ticker.data} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ticker: state.ticker,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadExchangeActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
