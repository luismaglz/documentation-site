import { createSelector } from "reselect";
import { RootState } from "../app/store";

export const getAppState = (state: RootState) => state.appState;

export const selectSelectedModuleId = createSelector(
  getAppState,
  (state) => state?.selectedModule
);

export const selectSelectedKind = createSelector(
  getAppState,
  (state) => state?.selectedKind
);
