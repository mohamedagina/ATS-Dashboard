import { Checkbox } from 'antd';
import { Candidate } from '../../models';
import { ProfilePicPlaceholder } from '..';
import { Link } from 'react-router-dom';
import { useCandidatesContext } from '../../hooks';
import { SharedObj } from '../../context/candidates-context';
import './CandidateInfo.css';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export const CandidateInfo = ({ candidate }: { candidate: Candidate }) => {
  const { isSelected, selectCandidates, unSelectCandidates } =
    useCandidatesContext() as SharedObj;

  const handleCheckChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) selectCandidates([candidate.id]);
    else unSelectCandidates([candidate.id]);
  };
  return (
    <div className="candidate">
      <Checkbox
        checked={isSelected(candidate.id)}
        onChange={handleCheckChange}
      />
      <ProfilePicPlaceholder className="xl" username={candidate.name} />
      <div className="candidate-info">
        <h2 className="semi-bold md">
          <Link to={`/candidates/${candidate.id}`}>{candidate.name}</Link>
        </h2>
        <p className="sm medium">{candidate.location}</p>
        <p className="sm thin">{candidate.education}</p>

        <ul className="tags">
          {candidate.hashTags.map((hash, i) => (
            <li key={i}>
              <Link className="primary xsm" to={`?hash=${hash}`}>
                {hash}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="tags">
          {candidate.tags.map((tag, i) => (
            <li key={i}>
              <span className="tag xsm medium">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
