/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Table } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import companyServices from "../services/company-service";
import { columns, getNameInput } from "./utils";

function FindCompanies() {
  const [expand, setExpand] = useState(false);
  const [loadedCompanies, setLoadedCompanies] = useState([]);
  //const [isLoading, setLoding] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    companyServices.findAllCompanies().then((companies) => {
      console.log(companies);
      setLoadedCompanies(companies);
    });
  };

  return (
    <div>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getNameInput()}</Row>
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
        <Table columns={columns} dataSource={loadedCompanies} />
      </div>
    </div>
  );
}

export default FindCompanies;
