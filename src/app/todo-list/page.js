import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const TodoListPage = () => {
  return (
    <main className="flex w-full">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%] ml-3">
        <NavbarComponent />
      </div>
    </main>
  );
};

export default TodoListPage;
