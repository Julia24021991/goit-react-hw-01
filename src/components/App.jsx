import userData from "../userData.json";
import { Profile } from "./Profile";

export const App = () => {
  return (
    <>
      <Profile userData={userData}
      />
    </>
  );
};