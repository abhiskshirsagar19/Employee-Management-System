import React from "react";
import Header from "../others/Header";
import TaskCounts from "../others/TaskCounts";
import TaskList from "../others/TaskList";

export default function EmployeeDashboard() {
  return (
    <div className="p-10 mt-10  bg-[#1C1C1C] h-screen">
      <Header />
      <TaskCounts />
      <TaskList />
    </div>
  );
}
