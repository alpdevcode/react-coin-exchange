import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  color: rgb(121, 209, 121);
  text-align: right;
  padding: 1.5rem 0 1.5rem 5rem;
`;

const Button = styled.button`
  margin: 0px 10px;
`;

const ToggleButton = styled(Button)`
  width: 170px;
`;

var formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function AccountBalance(props) {
  const balanceButtonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

  const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-primary');
  // Placeholder text
  let accountBalance = '\u00A0';

  if (props.showBalance) {
    accountBalance = <>Your Balance: {formatter.format(props.amount)}</>;
  }

  return (
          
          <Section>
            {accountBalance}
            <ToggleButton onClick={props.handleDisplayBalance} className={buttonClass}>
              {balanceButtonText}
            </ToggleButton>
            <Button className='btn btn-info' onClick={props.handleAddBalance}>
              <i className="fas fa-tint"></i>
            </Button>
          </Section>
  );
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}