import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            color: "#b91c1c",
            fontWeight: "700",
            padding: "50px 0",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          This is Not Found — <Link href="/">Back Home</Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
