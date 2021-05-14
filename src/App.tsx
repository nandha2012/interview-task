import React, { Suspense } from 'react';
const Dashboard = React.lazy(()=> import('./pages/dashboard'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
