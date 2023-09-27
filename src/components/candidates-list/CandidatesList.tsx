import { useState } from 'react';
import { useCandidatesContext } from '../../hooks';
import { SharedObj } from '../../context/candidates-context';
import { Button, Checkbox, Divider, Dropdown, MenuProps, Tooltip } from 'antd';
import { CandidateInfo } from '../';
import { GoChevronDown, GoTag } from 'react-icons/go';
import {
  RiUserFollowLine,
  RiUserUnfollowLine,
  RiUserVoiceLine,
  RiMailLine
} from 'react-icons/ri';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import './CandidatesList.css';
import { Link } from 'react-router-dom';

const candidateActions = [
  {
    title: 'Tag',
    icon: <GoTag />
  },
  {
    title: 'Disqualify',
    icon: (
      <span className="danger">
        <RiUserUnfollowLine />
      </span>
    )
  },
  {
    title: 'Accept',
    icon: <RiUserFollowLine />
  },
  {
    title: 'Call',
    icon: <RiUserVoiceLine />
  },
  {
    title: 'Mail',
    icon: <RiMailLine />
  }
];

export const CandidatesList = () => {
  const { candidates, stages, selectCandidates, unSelectCandidates } =
    useCandidatesContext() as SharedObj;
  const [selectedStage, setSelectedStage] = useState<string>(stages[0].title);

  const items: MenuProps['items'] = stages.map((stage, i) => ({
    key: i,
    label: (
      <span
        className={`stage-item ${
          stage.title === selectedStage ? 'selected' : ''
        }`}
      >
        {stage.title}{' '}
        <span className="stage-candidates">{stage.candidates}</span>
      </span>
    )
  }));

  const actionOptions: MenuProps['items'] = stages.map((stage, i) => ({
    key: i,
    label: <span className="stage-item">Move To {stage.title}</span>
  }));

  const handleSelectAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) selectCandidates();
    else unSelectCandidates();
  };
  return (
    <div className="candidates-container">
      <header className="candidates-header">
        <Dropdown
          className="stages-menu"
          menu={{
            items,
            onClick: e => setSelectedStage(stages[Number(e.key)].title)
          }}
        >
          <Button className="space-between">
            {selectedStage}
            <GoChevronDown />
          </Button>
        </Dropdown>

        <div className="candidates-actions">
          {candidateActions.map(action => (
            <Tooltip key={action.title} title={action.title}>
              <button className="action-btn" title={action.title}>
                {action.icon}
              </button>
            </Tooltip>
          ))}

          <Divider type="vertical" style={{ margin: 0 }} />

          <Dropdown.Button
            icon={
              <span className="center xl">
                <GoChevronDown />
              </span>
            }
            type="primary"
            menu={{ items: actionOptions }}
          >
            Move To Video Interview I
          </Dropdown.Button>
        </div>
      </header>

      <div className="candidates-list">
        <header>
          <Checkbox onChange={handleSelectAll} className="primary semi-bold">
            {candidates.length} Candidates
          </Checkbox>{' '}
          <div className="list-tabs">
            <Link to="?stage=Qualified" className="active">
              Qualified
            </Link>
            <Link to="?stage=task">
              Task <span className="stage-candidates">25</span>
            </Link>
            <Link to="?stage=Disqualified">
              Disqualified <span className="stage-candidates">78</span>
            </Link>
          </div>
        </header>

        {candidates.map(candidate => (
          <CandidateInfo key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};
