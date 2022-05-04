import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWrite, setCategory, setContent, setTitle } from "store/write";

export default function useWrite() {
  const { title, content, category, loading, error } = useSelector(
    (state) => state.write
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategory = useCallback((e) => {
    dispatch(setCategory(e.target.value));
  });
  const handleTitle = useCallback((e) => {
    dispatch(setTitle(e.target.value));
  });
  const handleContent = useCallback(({ content }) => {
    dispatch(setContent({ content }));
  });
  const onSubmit = useCallback(() => {
    dispatch(fetchWrite({ title, content, category }));
  }, [title, content, category]);

  return {
    title,
    content,
    category,
    handleCategory,
    handleContent,
    handleTitle,
    onSubmit,
  };
}
