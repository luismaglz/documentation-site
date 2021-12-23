import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import applicationStateReducer from "../store/app-state-slice";
import documentationReducer from "../store/documentation-slice";

export const store = configureStore({
  reducer: {
    documentation: documentationReducer,
    appState: applicationStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
