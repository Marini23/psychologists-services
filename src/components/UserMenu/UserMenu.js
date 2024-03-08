import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/selectors';
import { logOut } from '../../redux/authSlice/authOperations';
import toast from 'react-hot-toast';

import avatar from './avatar_user.svg';
import {
  AvatarIcon,
  Button,
  Name,
  UserContainer,
  UserInfo,
} from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logOut());
    } catch (error) {
      toast.error('Something went wrong. Try again later');
    }
  };

  return (
    <UserContainer>
      <UserInfo>
        <AvatarIcon>
          <img src={avatar} alt="avatar" width={24} height={24} />
        </AvatarIcon>
        <Name>{name}</Name>
      </UserInfo>
      <Button type="button" onClick={handleLogout}>
        Log Out
      </Button>
    </UserContainer>
  );
};
