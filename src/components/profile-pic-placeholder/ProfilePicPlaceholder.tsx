import { getImagePlaceholder } from '../../helpers';
import './ProfilePicPlaceholder.css';

export const ProfilePicPlaceholder = ({
  username,
  className
}: {
  username: string;
  className?: string;
}) => {
  return (
    <span className={`profile-picture-placeholder ${className ?? ''}`}>
      {getImagePlaceholder(username)}
    </span>
  );
};
