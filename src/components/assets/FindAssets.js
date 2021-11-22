import React, { useState } from "react";
import { Form, Row, Col, Input, Button, Select, Table, Space } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Option } = Select;

const columns = [
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

const data = [
  {
    key: 1,
    name: "Motor",
    unit: "KIWI1234",
    model: "Sedan",
    status: "Running",
    health: "80%",
    owner: "Aleson Barreto",
  },
];

function handleOptionChange(value) {
  console.log(`selected ${value}`);
}

function FindAssets() {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a>
          </Col>
        </Row>
      </Form>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default FindAssets;
