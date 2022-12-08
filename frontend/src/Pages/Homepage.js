import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../component/Authetication/Login";
import Signup from "../component/Authetication/Signup";

function Homepage() {
  const history = useHistory();
  // check if the user if logged in
  useEffect(() => {
    return () => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) history.push("/chats");
    };
  }, [history]);

  return (
    <Container maxW="2xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
          Talk-a-Tive
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        color={"black"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>
              <p>Login</p>
            </Tab>
            <Tab width={"50%"}>
              {" "}
              <p>Sing up</p>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Signup />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
