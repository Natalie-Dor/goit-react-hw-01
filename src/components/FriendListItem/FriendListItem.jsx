import clsx from 'clsx';
import css from './FriendListItem.module.css';
export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(css.text, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
