import React, { useState } from "react";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { edit } from "./reduxcomponents/Watercancount";
export default function Edit() {
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const dispatch = useDispatch();
  const onSave = (e) => {
    e.preventDefault();
    dispatch(edit({ price, capacity }));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px auto",

          height: 500,
          width: 500,
        }}
      >
        <div style={{ margin: "20px auto" }}>
          {" "}
          <div>
            <TextArea
              placeholder="can capacity(Litres)"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          <div style={{ margin: "20px auto" }}>
            {" "}
            <TextArea
              placeholder="price per can"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <TextArea
              placeholder={new Date().toDateString()}
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </div>
          <div>
            {" "}
            <Button
              style={{
                marginTop: 30,
                borderRadius: 5,
                width: 500,
                background: "rgb(35 137 219)",
                color: "white",
              }}
              onClick={onSave}
            >
              WATER CAN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
