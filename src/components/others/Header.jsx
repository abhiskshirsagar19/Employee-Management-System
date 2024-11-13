import React from "react";

export default function Header() {
  return (
    <div className="text-white flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">AK 👋</span>
      </h1>
      <button className="bg-red-500 px-5 py-2 rounded-sm text-lg font-medium  text-white">
        Log Out
      </button>
    </div>
  );
}
