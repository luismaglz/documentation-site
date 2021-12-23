import { createSelector } from "reselect";
import { ReflectionKind } from "typedoc";
import { RootState } from "../app/store";

export const getDocumentationState = (state: RootState) => state.documentation;

export const selectChildren = createSelector(
  getDocumentationState,
  (state) => state?.full_documentation?.children
);

export const selectModules = createSelector(getDocumentationState, (state) => {
  const moduleIds = state?.full_documentation?.groups?.[0]?.children;
  return state?.full_documentation?.children?.filter((child) =>
    moduleIds?.includes(child.id)
  );
});

export const selectModuleNames = createSelector(selectModules, (modules) =>
  modules?.map((module) => module.name)
);

export const selectChildrenByKindAndModule = (
  moduleId: number,
  kind: ReflectionKind
) =>
  createSelector(selectChildren, (children) => {
    return children
      ?.find((child) => child.id === moduleId)
      ?.children?.filter((child) => child.kind === kind);
  });
