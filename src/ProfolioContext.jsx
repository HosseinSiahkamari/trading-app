import { createContext, useContext, useState } from 'react';

const ProfolioContext = createContext();

export function useProfolioContext() {
  return useContext(ProfolioContext);
}

export function ProfolioContextProvider({ children }) {
  const [profolioState, setProfolioState] = useState([]);

  return (
    <ProfolioContext.Provider value={{ profolioState, setProfolioState }}>
      {children}
    </ProfolioContext.Provider>
  );
}
