import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/selectors';
import { logOut } from '../../redux/authOperations';

import avatar from './avatar.svg';
import { Avatar } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Avatar src={avatar} alt="avatar" width={40} height={40} />
        <p>{name}</p>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
