import { configureStore } from "@reduxjs/toolkit";
import ui from "./ui";

export default configureStore({
  reducer: { ui },
  devTools: process.env.NODE_ENV === "development",
});
