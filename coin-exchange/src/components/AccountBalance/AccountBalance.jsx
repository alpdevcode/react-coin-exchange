import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  color: rgb(121, 209, 121);
  text-align: right;
  padding: 1rem 3rem 1rem 0rem;
`;

export default function AccountBalance(props) {
  const balanceButtonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

  let accountBalance = null;
  if (props.showBalance) {
    accountBalance = <>Your Balance: {props.amount}</>;
  }

  return (<Section>
            {accountBalance}
            <button onClick={props.handleDisplayBalance}>{balanceButtonText}</button>
          </Section>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}