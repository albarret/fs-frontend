/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Table } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import assetServices from "../services/asset-service";
import { columns, getFields } from "./utils";

function FindAssets() {
  const [expand, setExpand] = useState(false);
  const [loadedAssets, setLoadedAssets] = useState([]);
  //const [isLoading, setLoding] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    assetServices
      .findAllAssets()
      .then((response) => {
        return response.json();
      })
      .then((assets) => {
        assets.map((asset) => {
          const unit = asset.unit;
          if (unit) {
            asset.unit = unit.name;
          } else {
            asset.unit = "null";
          }
          asset.key = asset._id;
          return asset;
        });
        setLoadedAssets(assets);
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
        <Table columns={columns} dataSource={loadedAssets} />
      </div>
    </div>
  );
}

export default FindAssets;
