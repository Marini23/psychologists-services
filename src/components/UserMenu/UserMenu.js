import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/selectors';
import { logOut } from '../../redux/authOperations';

import avatar from './avatar.svg';
import {
  Avatar,
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
        <Avatar src={avatar} alt="avatar" width={40} height={40} />
        <Name>{name}</Name>
      </UserInfo>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </UserContainer>
  );
};
