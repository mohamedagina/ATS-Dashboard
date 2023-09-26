import { useCandidatesContext } from '../../hooks';
import { Checkbox } from 'antd';
import './CandidatesList.css';
import { CandidateInfo } from '../';

export const CandidatesList = () => {
  const { candidates } = useCandidatesContext();

  return (
    <div className="candidates-list">
      <header>
        <Checkbox className="primary semi-bold">
          {candidates.length} Candidates
        </Checkbox>{' '}
      </header>

      {candidates.map(candidate => (
        <CandidateInfo key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};
