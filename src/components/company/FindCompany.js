import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function FindCompanies() {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const fields = [{ name: "name", placeholder: "Name", span: 8, key: 0 }];
    const children = [];
    fields.forEach((field) => {
      children.push(
        <Col span={field.span} key={field.key}>
          <Form.Item name={field.name} label={field.placeholder}>
            <Input placeholder={field.placeholder} />
          </Form.Item>
        </Col>
      );
    });

    return children;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
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
  );
}

export default FindCompanies;
