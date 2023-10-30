import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Box, Heading, Text, Button } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/kanban/card-list/"
        ); // Replace '/api/cards' with your API endpoint URL
        const cards = response.data;
        // Assuming your API returns an array of cards with appropriate statuses (Not Started, In Progress, Completed)

        // Split the cards into different status categories
        setData(cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const notStartedCards = data.filter((card) => card.status === "Not-Started");
  const inProgressCards = data.filter((card) => card.status === "In-Progress");
  const completedCards = data.filter((card) => card.status === "Completed");

  const handleCardClick = (card) => {
    // Handle the card click event if needed
    console.log("Clicked card:", card);
  };

  return (
    <Grid
      gap={10}
      templateColumns="repeat(3,1fr)"
      position="absolute"
      height="664px"
      top="280px"
      left="103px"
      width="600px"
    >
      <GridItem backgroundColor="#eeeeee">
        <Heading
          width="auto"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          line-height="19.6px"
          background="white"
        >
          Not Started({notStartedCards.length})
        </Heading>
        <Box p={4}>
          {notStartedCards.map((card) => (
            <Box
              onClick={() => handleCardClick(card)}
              backgroundColor="white"
              key={card.card_id}
              borderWidth="1px"
              borderRadius="md"
              p={3}
            >
              <Text
                width="125px"
                height="17px"
                fontWeight="500"
                fontSize="14px"
              >
                {card.task_name}
              </Text>
              <Text width="177px" height="45px" fontSize="12px">
                {card.description}
              </Text>
              <Grid display="flex" justifyContent="end">
                <GridItem fontSize="13px">
                  {card.priority === "1" || card.priority === "2" ? (
                    <ChevronUpIcon color="red" />
                  ) : (
                    <ChevronDownIcon color="green" />
                  )}
                  P{card.priority}
                  <Button
                    marginLeft="10px"
                    width="28px"
                    height="25px"
                    borderRadius="50%"
                    backgroundColor="#EEEEEE"
                  >
                    {card.story_points}
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </GridItem>

      {/* Render In Progress and Completed columns similarly */}
      <GridItem backgroundColor="#eeeeee">
        <Heading
          width="auto"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          line-height="19.6px"
          background="white"
        >
          In Progress({inProgressCards.length})
        </Heading>
        <Box p={4}>
          {inProgressCards.map((card) => (
            <Box
              onClick={() => handleCardClick(card)}
              backgroundColor="white"
              key={card.card_id}
              borderWidth="1px"
              borderRadius="md"
              p={3}
            >
              <Text
                width="125px"
                height="17px"
                fontWeight="500"
                fontSize="14px"
              >
                {card.task_name}
              </Text>
              <Text width="177px" height="45px" fontSize="12px">
                {card.description}
              </Text>
              <Grid display="flex" justifyContent="end">
                <GridItem fontSize="13px">
                  {card.priority === "1" || card.priority === "2" ? (
                    <ChevronUpIcon color="red" />
                  ) : (
                    <ChevronDownIcon color="green" />
                  )}
                  P{card.priority}
                  <Button
                    marginLeft="10px"
                    width="28px"
                    height="25px"
                    borderRadius="50%"
                    backgroundColor="#EEEEEE"
                  >
                    {card.story_points}
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </GridItem>

      <GridItem backgroundColor="#eeeeee">
        <Heading
          width="auto"
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          line-height="19.6px"
          background="white"
        >
          Completed({completedCards.length})
        </Heading>
        <Box p={4}>
          {completedCards.map((card) => (
            <Box
              onClick={() => handleCardClick(card)}
              backgroundColor="white"
              key={card.card_id}
              borderWidth="1px"
              borderRadius="md"
              p={3}
            >
              <Text
                width="125px"
                height="17px"
                fontWeight="500"
                fontSize="14px"
              >
                {card.task_name}
              </Text>
              <Text width="177px" height="45px" fontSize="12px">
                {card.description}
              </Text>
              <Grid display="flex" justifyContent="end">
                <GridItem fontSize="13px">
                  {card.priority === "1" || card.priority === "2" ? (
                    <ChevronUpIcon color="red" />
                  ) : (
                    <ChevronDownIcon color="green" />
                  )}
                  P{card.priority}
                  <Button
                    marginLeft="10px"
                    width="28px"
                    height="25px"
                    borderRadius="50%"
                    backgroundColor="#EEEEEE"
                  >
                    {card.story_points}
                  </Button>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default CardList;
