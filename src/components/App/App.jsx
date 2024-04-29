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
import Profile from '../Profile/Profile';
import data from '../../userData.json';
import FriendList from '../Friendlist/FriendList';
import friends from '../../friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.reset}>
      <Profile props={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
