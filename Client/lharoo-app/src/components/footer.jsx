import React from "react";

const CurrentDate = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <p>Copyright © {CurrentDate}|Team Loyal Developers</p>
    </footer>
  );
}
