import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import CardList from "./components/CardList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div>
      <DashBoard />
      <CardList />
    </div>
  );
};

export default App;
