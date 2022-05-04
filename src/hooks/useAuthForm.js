import setUserStorage from "lib/setUserStorage";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, initAuth } from "store/auth";
import { changeForm, resetForm } from "store/form";
import { fetchCheck } from "store/user";

export default function useAuthForm() {
  const form = "auth";
  const { username, password } = useSelector((state) => state.form.auth);
  const { auth, error } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(initAuth());
    dispatch(resetForm({ form: "auth" }));
  }, []);

  useEffect(() => {
    if (auth) {
      dispatch(fetchCheck());
    }
  }, [auth]);

  useEffect(() => {
    if (user) {
      router.replace("/djemalsvpdlwl/main");
      try {
        setUserStorage(user);
      } catch (e) {
        console.log("localstorage is not working");
      }
    }
  }, [user]);

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
