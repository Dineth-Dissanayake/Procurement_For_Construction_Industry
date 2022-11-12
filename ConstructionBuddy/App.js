import React from 'react';
import { AuthContextProvider } from './src/api/AuthContext';
import AppRouter from './src/router/router';

const App = () => {
  return(
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App;