import { Checkbox } from 'antd';
import { Candidate } from '../../models';
import './CandidateInfo.css';
import { ProfilePicPlaceholder } from '..';
import { Link } from 'react-router-dom';

export const CandidateInfo = ({ candidate }: { candidate: Candidate }) => {
  return (
    <div className="candidate">
      <Checkbox />
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
