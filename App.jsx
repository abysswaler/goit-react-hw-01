import Profile from './src/components/Profile/Profile';
import userData from './src/userData.json';
import friends from './src/friend.json';
import FriendList from './src/components/FriendList/FriendList';
import transactions from './src/transactions.json'
import TransactionHistory from './src/components/TransactionHistory/TransactionHistory'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;