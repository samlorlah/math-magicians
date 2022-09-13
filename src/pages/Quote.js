import React from 'react';

function Quote() {
  return (
    <main style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(80vh - 80px)',
    }}
    >
      <p>
        Mathematics is not about numbers, equations, computations, or algorithm:
        it is about understanding. - William Paul Thurston
      </p>
    </main>
  );
}

export default Quote;
