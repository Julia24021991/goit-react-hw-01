import userData from "../userData.json";
import { Profile } from "./Profile";

import friends from "../friends.json"
import { FriendList } from "./FriendList";

import transactions from "../transactions.json";
import { TransactionHistory } from "./TransactionHistory";


export const App = () => {
  return (
    <>
      <Profile userData={userData}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};