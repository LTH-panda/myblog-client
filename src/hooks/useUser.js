import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCheck, setTempUser } from "store/user";

export default function useUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);
    if (!user) return;
    dispatch(setTempUser({ user }));
    dispatch(fetchCheck());
  }, [dispatch]);
}
