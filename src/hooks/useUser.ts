import { UserType } from "types";

const useUser = () => {
  const user: UserType = JSON.parse(localStorage.getItem("user"));
  return { user };
};
export default useUser;
