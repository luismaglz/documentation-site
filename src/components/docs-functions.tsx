import { Card, List, PageHeader, Typography } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectChildrenByKindAndModule } from "../store/documentation-selectors";
const { Text, Link } = Typography;

export const DocsFunctions: FC<{ moduleId: number }> = (props) => {
  const functionsToDisplay = useSelector(
    selectChildrenByKindAndModule(props.moduleId, 64)
  );

  const functionCards = functionsToDisplay?.map((funcToDisplay) => {
    return (
      <Card title={funcToDisplay.name} bordered={true} style={{ width: 300 }}>
        <List
          dataSource={funcToDisplay.signatures}
          renderItem={(signature) => (
            <List>
              <List.Item>
                {signature?.name}
                <Text code>{(signature?.type as any)?.name}</Text>
              </List.Item>
              <List.Item>
                <Typography.Text mark>[description]</Typography.Text>
                {signature?.comment?.shortText}
              </List.Item>
              <List.Item>
                <List
                  dataSource={signature?.parameters}
                  renderItem={(funcParam) => (
                    <List.Item>{funcParam?.name}</List.Item>
                  )}
                ></List>
              </List.Item>
            </List>
          )}
        ></List>
        <List
          dataSource={funcToDisplay.sources}
          renderItem={(source) => (
            <List>
              <List.Item>
                <Typography.Text mark>[source]</Typography.Text>
                {source?.fileName}
              </List.Item>
            </List>
          )}
        ></List>
      </Card>
    );
  });

  return (
    <div>
      <PageHeader
        className="functions-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <div className="page-content">{functionCards}</div>
    </div>
  );
};
