import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "store/ui";

export default function useSidebar() {
  const sidebar = useSelector((state) => state.ui.sidebar);
  const dispatch = useDispatch();

  const handleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);

  return { sidebar, handleSidebar };
}
