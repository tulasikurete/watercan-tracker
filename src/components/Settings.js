import React, { useState } from "react";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "./reduxcomponents/Watercancount";

export default function Settings() {
  const [canCapacity, setCanCapacity] = useState(20);
  const [pricePerCan, setPricePerCan] = useState(10);
  const [familyStrength, setFamilyStrength] = useState(2);

  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();

    // set data to store on submit
    dispatch(updateSettings({ pricePerCan, canCapacity, familyStrength }));
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
          <h3>SETTINGS</h3>
          <div>
            <TextArea
              placeholder="can capacity(Litres)"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => setCanCapacity(e.target.value)}
              value={canCapacity}
            />
          </div>
          <div style={{ margin: "20px auto" }}>
            {" "}
            <TextArea
              placeholder="price per can"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => setPricePerCan(e.target.value)}
              value={pricePerCan}
            />
          </div>
          <div>
            {" "}
            <TextArea
              placeholder=" family strength"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => setFamilyStrength(e.target.value)}
              value={familyStrength}
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
              onClick={handleSave}
            >
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
