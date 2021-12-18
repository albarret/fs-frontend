import { Form, Col, Input } from "antd";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

const fields = [{ name: "name", placeholder: "Name", span: 8, key: 0 }];

export const getNameInput = () => {
  return (
    <Col span={fields[0].span} key={fields[0].key}>
      <Form.Item name={fields[0].name} label={fields[0].placeholder}>
        <Input placeholder={fields[0].placeholder} />
      </Form.Item>
    </Col>
  );
};
