/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Table } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import unitServices from "../services/unit-service";
import { columns, NameInput, CompaniesSelect } from "./utils";

function FindUnits() {
  const children = [<NameInput />, <CompaniesSelect />];
  const [expand, setExpand] = useState(false);
  const [loadedUnits, setLoadedUnits] = useState([]);
  //const [isLoading, setLoding] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    unitServices.findAllUnits().then((units) => {
      units.map((unit) => {
        unit.company = unit.company.name;
        return unit;
      });
      setLoadedUnits(units);
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
        <Row gutter={24}>{children}</Row>
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
        <Table columns={columns} dataSource={loadedUnits} />
      </div>
    </div>
  );
}

export default FindUnits;
