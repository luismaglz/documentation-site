import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSONOutput } from "typedoc";
import docs from "./core-docs.json";

export interface DocumentationState {
  full_documentation: JSONOutput.ProjectReflection;
}

const initialState: DocumentationState = {
  full_documentation: docs as JSONOutput.ProjectReflection,
};

export const documentationSlice = createSlice({
  name: "state.documentation",
  initialState,
  reducers: {
    SetDocumentation: (
      state,
      action: PayloadAction<{
        docs: JSONOutput.ProjectReflection;
      }>
    ) => {
      state.full_documentation = action.payload.docs;
    },
  },
});

export const { SetDocumentation } = documentationSlice.actions;

export default documentationSlice.reducer;
