import { useDispatch, useSelector } from "react-redux";

export default function useOnlineAdmin() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return { user };
}
