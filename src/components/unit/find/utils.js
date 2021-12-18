import { Form, Col, Input, Select } from "antd";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import companyServices from "../../company/services/company-service";

const { Option } = Select;

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
];

export const fields = [
  { name: "name", placeholder: "Name", span: 8, key: 0 },
  { name: "company", placeholder: "Company", span: 8, key: 1 },
];

export function NameInput() {
  return (
    <Col span={fields[0].span} key={fields[0].key}>
      <Form.Item name={fields[0].name} label={fields[0].placeholder}>
        <Input placeholder={fields[0].placeholder} />
      </Form.Item>
    </Col>
  );
}

export function CompaniesSelect() {
  const [loadedCompanies, setLoadedCompanies] = useState([]);

  const selectOptions = [];
  if (loadedCompanies.length && loadedCompanies.length > 0) {
    for (let i = 0; i < loadedCompanies.length; i++) {
      selectOptions.push(
        <Option key={loadedCompanies[i]._id}>{loadedCompanies[i].name}</Option>
      );
    }
  }

  selectOptions.push(<Option key={"empty"}>Select a Company</Option>);

  useEffect(() => {
    companyServices.findAllCompanies().then((companies) => {
      setLoadedCompanies(companies);
    });
  }, []);

  return (
    <Col span={fields[1].span} key={fields[1].key}>
      <Form.Item name={fields[1].name} label={fields[1].placeholder}>
        <Select defaultValue="empty">{selectOptions}</Select>
      </Form.Item>
    </Col>
  );
}
