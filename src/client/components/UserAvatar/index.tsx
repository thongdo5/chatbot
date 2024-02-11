import React, { FC } from 'react';
import UserAvatarImage from '@assets/user-avatar.png';
import StyledUserAvatar from './styles/StyledUserAvatar';

const UserAvatar: FC = () => {
  return (
    <StyledUserAvatar>
      <img src={UserAvatarImage} alt='user avatar' />
    </StyledUserAvatar>
  );
};

export default UserAvatar;
