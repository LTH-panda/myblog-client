import { write } from "lib/api/career.api";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForm } from "store/form";

export default function useCareer() {
  const { title, desc, during } = useSelector((state) => state.form.career);
  const form = "career";
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch(changeForm({ form, name, value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      write({ title, desc, during });
      console.log("career submit");
    },
    [title, desc, during]
  );

  return { title, desc, during, onChange, onSubmit };
}
