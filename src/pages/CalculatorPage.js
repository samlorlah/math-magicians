import React from 'react';
import Calculator from '../components/Calculator';

function CalculatorPage() {
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    paddingLeft: '100px',
  };

  return (
    <main>
      <div style={style}>
        <h2>Let&apos;s do some math!</h2>
        {/* <h2>Let&apos;s do some math!</h2> */}
        <Calculator />
      </div>
    </main>
  );
}

export default CalculatorPage;
