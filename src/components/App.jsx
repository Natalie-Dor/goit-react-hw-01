/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// import Profile from './Profile';
// import data from '../userData.json';

// export default function App() {
//   return (
//     <>
//       <Profile userData={data} key={data.id} />
//     </>
//   );
// }
import Profile from './Profile';
import data from '../userData.json';
import FriendList from './FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile props={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
