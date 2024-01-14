import userData from "../userData.json";
import friends from "../friends.json"
import { Profile } from "./Profile";
import { FriendList } from "./FriendList";

export const App = () => {
  return (
    <>
      <Profile userData={userData}
      />
      <FriendList friends={friends} />
    </>
  );
};