import { useState } from 'react';
import { createContext } from 'react';
import { candidates } from './candidates.const';

export const CandidateContext = createContext({ candidates });

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const sharedObj = {
    candidates: filteredCandidates
  };
  return (
    <CandidateContext.Provider value={sharedObj}>
      {children}
    </CandidateContext.Provider>
  );
};
