import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchbar } from "store/ui";

export default function useSearchBar() {
  const searchbar = useSelector((state) => state.ui.searchbar);
  const dispatch = useDispatch();

  const handleSearchbar = useCallback(() => {
    dispatch(toggleSearchbar());
  }, [dispatch]);

  return { searchbar, handleSearchbar };
}
