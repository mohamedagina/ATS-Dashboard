import { CandidateContext } from '../context/candidates-context';
import { useContext } from 'react';

export const useCandidatesContext = () => useContext(CandidateContext);
