import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading, Button, Grid, GridItem, Box } from "@chakra-ui/react";
import CardList from "./CardList";
import TaskForm from "./TaskForm";
import { useDisclosure } from "@chakra-ui/react";
const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading
        width="239px"
        height="44px"
        top="102px"
        left="102px"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="36px"
        lineHeight="44px"
        color="#333333"
        position="absolute"
      >
        Kanban Board
      </Heading>
      <Heading
        width="210px"
        height="29px"
        top="146px"
        left="102px"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="24px"
        lineHeight="29px"
        color="#333333"
        position="absolute"
      >
        Buzz Aldrin’s tasks
      </Heading>
      <Button
        onClick={onOpen}
        width="79px"
        top="225px"
        left="106px"
        height="30px"
        fontSize="16px"
        position="absolute"
        backgroundColor="blue"
        borderRadius="4px"
        border="1px black"
        color="white"
      >
        Create
      </Button>

      {/* CardList component */}
      <CardList />

      {/* TaskForm component */}
      <TaskForm isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Dashboard;
