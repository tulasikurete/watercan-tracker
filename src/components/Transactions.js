import { Button, List } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { recordPayment } from "./reduxcomponents/Watercancount";
import { useState } from "react";

export default function Transactions() {
  const balance = useSelector((state) => state.water.balance);
  const [payment, setPayment] = useState(Math.abs(balance));

  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    e.preventDefault();

    dispatch(recordPayment({ payment, date: new Date() }));
    setPayment(Math.abs(balance) - payment);
  };

  const transactions = useSelector((state) => state.water.transactions);

  return (
    <div style={{ marginTop: 150 }}>
      <div style={{ width: 300, margin: "10px 0 0 600px" }}>
        <h4> Tranactions</h4>
        <TextArea
          placeholder="Amount"
          defaultValue={Math.abs(balance)}
          onChange={(e) => setPayment(Number(e.target.value))}
          value={payment}
        />
      </div>

      <div style={{ width: 300, marginLeft: 600, marginTop: 10 }}>
        <Button
          style={{
            width: 300,

            background: "#5316FF",
            color: "white",
          }}
          onClick={onHandleChange}
        >
          Record Payment
        </Button>

        <List>
          {transactions?.map(({ payment, date }, i) => (
            <List.Item>
              <p>{date.toLocaleString().split(",")[0]}</p>
              <span>{payment}</span>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
}
