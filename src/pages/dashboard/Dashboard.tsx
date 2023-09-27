import { Link } from 'react-router-dom';
import { CandidatesList, Filters } from '../../components';
import './Dashboard.css';
import { PiNotebook, PiPlayCircleBold } from 'react-icons/pi';

export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="sticky-wrapper">
        <div className="sticky-side">
          <div className="program-info">
            <h1 className="primary lg semi-bold">London Internship Program</h1>
            <span className="thin">London</span>
          </div>
          <Filters />
        </div>
      </div>
      <CandidatesList />
      <div className="floating-info">
        <Link to="/videos" title="videos" className="floating-link">
          <PiPlayCircleBold />4
        </Link>
        <Link to="/programs" className="floating-link primary">
          <PiNotebook></PiNotebook>5 Programs
        </Link>
      </div>
    </div>
  );
};
