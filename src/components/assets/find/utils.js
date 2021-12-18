import { Form, Col, Input, Select } from "antd";

const { Option } = Select;

function handleOptionChange(value) {
  console.log(`selected ${value}`);
}

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Health Level",
    key: "heath",
    dataIndex: "health",
  },
  {
    title: "Owner",
    key: "owner",
    dataIndex: "owner",
  },
];

export const getFields = () => {
  const fields = [
    { name: "name", placeholder: "Name", span: 8, key: 0 },
    { name: "unit", placeholder: "Unit", span: 8, key: 1 },
    { name: "model", placeholder: "Model", span: 8, key: 2 },
    { name: "description", placeholder: "Description", span: 8, key: 3 },
    { name: "status", placeholder: "Status", span: 3, key: 4 },
    { name: "health", placeholder: "Health Level", span: 4, key: 5 },
    { name: "owner", placeholder: "Owner", span: 8, key: 6 },
  ];
  const children = [];
  fields.forEach((field) => {
    if (field.name === "status") {
      children.push(
        <Col span={field.span} key={field.key}>
          <Form.Item name={field.name} label={field.placeholder}>
            <Select defaultValue="All" onChange={handleOptionChange}>
              <Option value="All">All</Option>
              <Option value="Running">Running</Option>
              <Option value="Allerting">Allerting</Option>
              <Option value="Stopped">Stopped</Option>
            </Select>
          </Form.Item>
        </Col>
      );
    } else {
      children.push(
        <Col span={field.span} key={field.key}>
          <Form.Item name={field.name} label={field.placeholder}>
            <Input placeholder={field.placeholder} />
          </Form.Item>
        </Col>
      );
    }
  });

  return children;
};
