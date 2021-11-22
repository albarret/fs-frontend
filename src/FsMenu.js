//import "style.css";
import { Menu } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

function FsMenu() {
  const [selectedKey, setSelectedKey] = useState("1");

  const clickHandler = (event) => {
    setSelectedKey(event.key);
  };

  return (
    <Menu onClick={clickHandler} selectedKeys={[selectedKey]} mode="inline">
      <Menu.Item key="1">Assets</Menu.Item>
      <Menu.Item key="2">Units</Menu.Item>
      <Menu.Item key="3">Companies</Menu.Item>
      <Menu.Item key="4">Users</Menu.Item>
    </Menu>
  );
}

export default FsMenu;
