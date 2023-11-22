import { Button, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Advanced() {
  //   const dispatch = useDispatch();
  //   // const information = useSelector((state)=>state.water.resetData)
  //   const waterCans = useSelector((state) => state.water.waterCans);
  //   const price = useSelector((state) => state.water.price);
  //   const perday = useSelector((state) => state.water.perday);
  return (
    <Row>
      <Col span={2}></Col>
      <Col span={8}>
        <p>
          <p>
            Please be aware that App stores all data in your local storage. This
            means that the data is stored on your device and is not transferred
            or stored on any external servers. By using our app, you consent to
            the storage of your data in this manner.
          </p>
          <br />
          <p>
            We only retain data for a six-month period, ensuring that we always
            have the most current information for better tracking. Plus, it
            helps us keep your local data storage tidy and streamlined.
          </p>
          <br />
          <hr />
          <p>
            Experience an issue with your data? No problem! Simply click the
            'RESET DATA' button to start fresh.
          </p>
          <Button
            variant="contained"
            color="error"
            sx={{ background: "#af001f", color: "white" }}
            // onClick={() =>
            //   dispatch(
            //     Advanced({
            //       waterCans: 0,
            //       waterCapacity: 0,
            //       price: 0,
            //       date: new Date(),
            //     })
            //   )
            // }
          >
            RESET DATA
          </Button>
          <hr />
          <p>
            Found your balance confusing? Simply click the 'RESET BALANCE'
            button to start the accounting fresh.
          </p>
          <Button
            variant="contained"
            color="error"
            sx={{ background: "#af001f", color: "white" }}
          >
            RESET BALANCE
          </Button>
        </p>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
}
