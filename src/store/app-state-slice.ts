import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReflectionKind } from "typedoc";

export interface ApplicationState {
  selectedModule: number | null;
  selectedKind: ReflectionKind | null;
}

const initialState: ApplicationState = {
  selectedModule: null,
  selectedKind: null,
};

export const applicationStateSlice = createSlice({
  name: "state.app-state",
  initialState,
  reducers: {
    SetSelectedModule: (
      state,
      action: PayloadAction<{
        moduleId: number | null;
      }>
    ) => {
      state.selectedModule = action.payload.moduleId;
    },
    SetSelectedKind: (
      state,
      action: PayloadAction<{
        kind: ReflectionKind | null;
      }>
    ) => {
      state.selectedKind = action.payload.kind;
    },
  },
});

export const { SetSelectedModule, SetSelectedKind } =
  applicationStateSlice.actions;

export default applicationStateSlice.reducer;
