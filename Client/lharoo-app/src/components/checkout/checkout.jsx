import React from "react";
import Navigation from "../navigation";

function CheckOut() {
  return (
    <>
      <Navigation />
      <h1 style={{ color: "white", marginLeft: 600, marginTop: 200 }}>
        Cart is empty.
      </h1>
    </>
  );
}

export default CheckOut;
