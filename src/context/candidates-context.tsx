import { useCallback, useState } from 'react';
import { createContext } from 'react';
import { candidates, stages } from './candidates.const';
import { Candidate, UUID, Stage } from '../models';

export interface SharedObj {
  candidates: Candidate[];
  stages: Stage[];
  selectedCandidates: UUID[];
  selectCandidates: (ids?: UUID[]) => void;
  unSelectCandidates: (ids?: UUID[]) => void;
  isSelected: (id: UUID) => boolean;
  searchQuery: (query?: string) => void;
}

export const CandidateContext = createContext({ candidates, stages });

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [selectedCandidates, setSelectedCandidates] = useState<UUID[]>([]);

  const selectCandidates = (ids?: UUID[]) => {
    if (!ids) {
      const _ids = filteredCandidates.map(candidate => candidate.id);
      setSelectedCandidates(curr => [...new Set([...curr, ..._ids])]);
      return;
    }

    setSelectedCandidates(curr => [...new Set([...curr, ...ids])]);
  };

  const unSelectCandidates = (ids?: UUID[]) => {
    if (!ids) setSelectedCandidates([]);
    else setSelectedCandidates(curr => curr.filter(_id => !ids.includes(_id)));
  };

  const isSelected = (id: UUID) => selectedCandidates.includes(id);

  const searchQuery = useCallback((query?: string) => {
    if (!query?.trim()) {
      setFilteredCandidates(candidates);
      return;
    }

    const cleanQuery = query.trim().toLowerCase();
    const filtered = candidates.filter(candidate =>
      [
        candidate.name.toLowerCase(),
        candidate.education.toLowerCase(),
        candidate.hashTags
      ].some(attr => attr.includes(cleanQuery))
    );

    setFilteredCandidates(filtered);
  }, []);

  const sharedObj = {
    candidates: filteredCandidates,
    stages,
    selectedCandidates,
    selectCandidates,
    unSelectCandidates,
    isSelected,
    searchQuery
  };
  return (
    <CandidateContext.Provider value={sharedObj}>
      {children}
    </CandidateContext.Provider>
  );
};
