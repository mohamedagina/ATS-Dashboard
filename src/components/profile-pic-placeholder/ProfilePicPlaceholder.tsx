import { getImagePlaceholder } from '../../helpers';
import './ProfilePicPlaceholder.css';

export const ProfilePicPlaceholder = ({ username }: { username: string }) => {
  return (
    <span className="profile-picture-placeholder">
      {getImagePlaceholder(username)}
    </span>
  );
};
