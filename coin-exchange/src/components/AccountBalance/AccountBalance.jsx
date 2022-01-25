import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  color: rgb(121, 209, 121);
  text-align: right;
  padding: 1rem 3rem 1rem 0rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (<Section>
              Your Balance: {this.props.amount}
            </Section>
    );
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}