import { configureStore } from "@reduxjs/toolkit";
import pageTabReducer from "./pageReducer";
import actionSideBar from "./sideBarReducer";
import fullScreen from "./fullScreen";

const store = () => {
  return configureStore({
    reducer: {
      actionSideBar: actionSideBar,
      page: pageTabReducer,
      fullScreen: fullScreen,
    },
  });
};
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
