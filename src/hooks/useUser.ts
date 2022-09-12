import { UserType } from "types";

const useUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return { user: user || false };
};
export default useUser;
