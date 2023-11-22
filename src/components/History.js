import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
export default function History() {
  const waterCans = useSelector((state) => state.water.waterCans);
  return (
    <div>
      <h1>History</h1>
      <List>
        {waterCans?.map(({ capacity, date, price }, i) => (
          <List.Item>
            <p>{date.toLocaleString().split(",")[0]}</p>
            <span>{price}</span>
            <span>{capacity} L</span>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
