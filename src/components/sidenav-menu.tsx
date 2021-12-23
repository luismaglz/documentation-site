import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReflectionKind } from "typedoc";
import { SetSelectedKind, SetSelectedModule } from "../store/app-state-slice";
import { selectModules } from "../store/documentation-selectors";

const { SubMenu } = Menu;

export const SideNavMenu: FC = () => {
  const modules = useSelector(selectModules);
  const dispatch = useDispatch();

  /**
   * Set the selected module and kind in the store
   */
  function selectModuleKind(moduleId: number, kind: ReflectionKind) {
    dispatch(SetSelectedModule({ moduleId }));
    dispatch(SetSelectedKind({ kind }));
  }

  const moduleMenuItems = modules?.map((module) => {
    const moduleMenuSubItems = module?.groups?.map((group) => {
      return (
        <Menu.Item
          key={`${module.id}${group.kind}`}
          onClick={() => selectModuleKind(module.id, group.kind)}
        >
          {group.title}
        </Menu.Item>
      );
    });

    return (
      <SubMenu key={module.id} icon={<UserOutlined />} title={module.name}>
        {moduleMenuSubItems}
      </SubMenu>
    );
  });

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      {moduleMenuItems}
    </Menu>
  );
};
