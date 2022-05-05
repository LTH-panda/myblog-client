import { remove, update, write } from "lib/api/career.api";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForm, fetchCareer, resetForm } from "store/form";

export default function useCareer() {
  const router = useRouter();
  const { id } = router.query;
  const { title, desc, during } = useSelector((state) => state.form.career);
  const form = "career";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetForm({ form }));
    if (id) {
      dispatch(fetchCareer({ id }));
    }
  }, [id]);

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

  const handleRemove = useCallback(() => {
    remove({ id });
    router.replace("/");
  }, [id]);

  const handleUpdate = useCallback(() => {
    update({ id, title, desc, during });
    router.push("/");
  }, [id, title, desc, during]);

  return {
    title,
    desc,
    during,
    id,
    onChange,
    onSubmit,
    handleRemove,
    handleUpdate,
  };
}
