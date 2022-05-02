import setUserStorage from "lib/setUserStorage";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "store/auth";
import { changeForm } from "store/form";

export default function useAuthForm() {
  const form = "auth";
  const { username, password } = useSelector((state) => state.form.auth);
  const { auth, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      setUserStorage(auth);
      router.replace("/");
    }
  }, [auth]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch(changeForm({ form, name, value }));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(fetchLogin({ username, password }));
    },
    [username, password]
  );

  return { username, password, error, onChange, onSubmit };
}
