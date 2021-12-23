import { FC } from "react";
import { useSelector } from "react-redux";
import { ReflectionKind } from "typedoc";
import {
  selectSelectedKind,
  selectSelectedModuleId,
} from "../store/app-state-selectors";
import { DocsFunctions } from "./docs-functions";

export const DocsContent: FC = () => {
  const selectedModuleId = useSelector(selectSelectedModuleId);
  const selectedKind = useSelector(selectSelectedKind);

  function selectDisplayType(
    selectedModuleId: number | null,
    selectedKind: ReflectionKind | null
  ) {
    if (!selectedModuleId || selectedKind === null) {
      return <div> Select a module </div>;
    }
    switch (selectedKind) {
      case 64:
        return <DocsFunctions moduleId={selectedModuleId}></DocsFunctions>;
      default: {
        return <div>no match</div>;
      }
    }
  }

  return <div>{selectDisplayType(selectedModuleId, selectedKind)}</div>;
};
