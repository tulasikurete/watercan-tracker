import React, { useState } from "react";
import { Drawer, Typography, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
export default function Bubbles() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined onClick={showDrawer} />
      <Drawer title="Babbles" placement="left" onClose={onClose} open={open}>
        <List>
          <Link to="/">
            <List.Item>
              <Typography>Home</Typography>
            </List.Item>
          </Link>
          <Link to="calender">
            <List.Item>
              <Typography>History</Typography>
            </List.Item>
          </Link>
          <Link to="transactions">
            <List.Item>
              <Typography>Tranactions</Typography>
            </List.Item>
          </Link>
          <Link to="settings">
            <List.Item>
              {" "}
              <Typography>Setting</Typography>
            </List.Item>
          </Link>
          <Link to="advanced">
            <List.Item>
              {" "}
              <Typography>Advanced</Typography>
            </List.Item>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
