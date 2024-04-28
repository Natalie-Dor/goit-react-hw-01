import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <>
      <ul>
        {friends.map(data => (
          <li key={data.id}>
            <FriendListItem friends={data} />
          </li>
        ))}
      </ul>
    </>
  );
}
