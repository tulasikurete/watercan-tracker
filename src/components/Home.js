import React, { useState } from "react";
import { Button, Col, Row, Card } from "antd";
import { CalendarOutlined, EditFilled, WalletFilled } from "@ant-design/icons";

import { Link } from "react-router-dom";
import Edit from "./Edit";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addWaterCan, updateSettings } from "./reduxcomponents/Watercancount";

export default function Home() {
  const dispatch = useDispatch();
  const waterCans = useSelector((state) => state.water.waterCans);
  const pricePerCan = useSelector((state) => state.water.settings.pricePerCan);
  const capacity = useSelector((state) => state.water.settings.canCapacity);
  const family = useSelector((state) => state.water.settings.familyStrength);
  const balance = useSelector((state) => state.water.balance);
  console.log({ capacity, pricePerCan, family });

  const formula =
    waterCans.length * (capacity / (new Date().getDate() * family));
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <div style={{ marginLeft: 550, background: "#e6e8f7" }}>
      <div style={{ margin: " 10px auto" }}>
        <div style={{ height: 200, width: 500 }}>
          <Row>
            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
              style={{ background: "white" }}
            >
              <Link to="calender">
                <Card elevation={2}>
                  <CalendarOutlined
                    style={{ color: "deeppink", marginRight: 60 }}
                  />
                  <span>{waterCans.length}</span>

                  <p>this month</p>
                </Card>
              </Link>
            </Col>

            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
              style={{ background: "white" }}
            >
              <Link to="calender">
                <Card elevation={2}>
                  <CalendarOutlined
                    style={{ color: "deeppink", marginRight: 60 }}
                  />
                  {/* <span>{waterCans.length}</span> */}
                  <p>Day</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
        <div style={{ height: 200, width: 500 }}>
          <Row>
            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
              style={{ backgroundColor: "white" }}
            >
              <Card elevation={2}>
                <span>{formula}</span>
                <p>person/day</p>
              </Card>
            </Col>
            <Col
              xs={{ span: 5, offset: 1 }}
              lg={{ span: 6, offset: 2 }}
              style={{ background: "white" }}
            >
              <Link to="transactions">
                <Card elevation={2}>
                  <WalletFilled style={{ color: "green", marginRight: 70 }} />
                  <p>{balance}₹</p>

                  <p>balance</p>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <Row>
          <Col xs={{ span: 8, offset: 1 }}>
            <Button
              type="primary"
              style={{
                marginTop: 70,
                borderRadius: 15,
                width: 200,
                background: "rgb(35 137 219)",
              }}
              onClick={() =>
                dispatch(
                  addWaterCan({
                    capacity: 20,
                    price: 10,
                    date: new Date(),
                  })
                )
              }
            >
              Water CAN
            </Button>
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              style={{ marginTop: 70, borderRadius: "50%", width: 50 }}
              onClick={showModal}
            >
              <EditFilled />
            </Button>
            <Modal
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{ disabled: true }}
              cancelButtonProps={{ disabled: true }}
            >
              <Edit />
            </Modal>
          </Col>
        </Row>
      </div>
    </div>
  );
}
