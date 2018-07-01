import React, { Component } from 'react';
import { Nav, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleSelectCurrency(eventKey) {
    this.props.loadExchangeActions.changeSelectedCurrency(eventKey);
    this.props.loadExchangeActions.loadAllExchangeTicker(eventKey);
  }

  componentDidMount() {
  }

  componentWillUpdate(nextState) {
  }

  componentDidUpdate() {
//    const currency = this.props.currency.selectedCurrency;
  }

  render() {
    return (
      <Navbar className="Header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="tabs" actionKey="1" onSelect={k => this.handleSelectCurrency(k)} pullRight>
          <NavDropdown eventKey="4" title={this.props.currency.selectedCurrency} id="nav-dropdown">
            <MenuItem eventKey="btc">BTC</MenuItem>
            <MenuItem eventKey="bch">BCH</MenuItem>
            <MenuItem eventKey="eth">ETH</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
