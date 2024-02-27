import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/selectors';
import { logOut } from '../../redux/authSlice/authOperations';

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

  return (
    <UserContainer>
      <UserInfo>
        <AvatarIcon>
          <img src={avatar} alt="avatar" width={24} height={24} />
        </AvatarIcon>
        <Name>{name}</Name>
      </UserInfo>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </UserContainer>
  );
};
